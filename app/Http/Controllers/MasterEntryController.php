<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\MstEquipmentDrug as Equipment;
use App\Models\MstSupplier;
use App\Models\MstStore;
use App\Models\MstStoreType;
use Illuminate\Http\RedirectResponse;


class MasterEntryController extends Controller
{
    /**
     * Show the form for creating a new equipment/drug entry.
     */
    public function createEquipment(Request $request): Response
    {
        $perPage = $request->get('per_page', 10);
        $search = $request->input('search');

        $sortBy = $request->get('sortBy', 'name');      // default column
        $sortDir = $request->get('sortDir', 'asc');   // default direction

        $equipmentList = Equipment::query()->when($search, function ($query, $search) {
                $query = $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");

                if (strtolower($search) == "active") {
                    $query = $query->orWhere('status', 1);
                }
                if (strtolower($search) == "inactive") {
                    $query = $query->orWhere('status', 0);
                }
                return $query;
            })
            // ->where('user_id', Auth::id())
            // ->latest()
            ->orderBy($sortBy, $sortDir)
            ->paginate($perPage)
            ->withQueryString();
        return Inertia::render('MasterRegister/EquipmentDrugs/EquipmentDrugsEntry', [
            'equipmentList' => $equipmentList,
            'filters' => [
                'search'   => $request->input('search'),
                'per_page' => $request->get('per_page', 10),
            ],
        ]);
    }

    /**
     * Store a newly created equipment/drug entry.
     */

    public function storeEquipment(Request $request): RedirectResponse
    {
        $request->validate([
            'equipmentName' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
        ]);

        $equipment = Equipment::create([
            'name' => $request->equipmentName,
            'description' => $request->description,
            'status' => true,
        ]);

        // return Inertia::render('MasterRegister/EquipmentDrugs/DrugsEntry')->with("success", "Equipment created successfully.");
        return redirect(route('equipment.create', absolute: false))->with("success", "Equipment created successfully.");
    }

    /**
     * Show the form for creating a new supplier entry.
     */

    public function createSupplier(): Response
    {
        return Inertia::render('MasterRegister/Supplier/SupplierEntry');      
    }

    /**
     * Store a newly created supplier entry.
     */

    public function storeSupplier(Request $request): Response
    {
        $request->validate([
            'supplierName' => 'required|string|max:255',
            'address' => 'required|string|max:1000',
        ]);

        $supplier = MstSupplier::create([
            'name' => $request->supplierName,
            'address' => $request->address,
            'status' => true,
        ]);
        return Inertia::render('MasterRegister/Supplier/SupplierEntry');
    }

    public function createStore(): Response
    {
        $storeList = MstStore::where('status', 1)->get()
        ->map(fn ($item) => [
            'value' => $item->id,
            'label' => $item->name,
        ]);
        $storeTypeList = MstStoreType::where('status', 1)->get()
        ->map(fn ($item) => [
            'value' => $item->id,
            'label' => $item->type,
        ]);
        return Inertia::render('MasterRegister/Store/StoreEntry', [
            'parentStoreList' => $storeList,
            'storeTypeList' => $storeTypeList
        ]);
    }

    /**
     * Store a newly created store entry.
     */

    public function storeStore(Request $request): Response
    {
        $request->validate([
            'storeName' => 'required|string|max:255',
            'storeType' => 'required|integer|exists:mst_store_types,id',
            'parentStore' => 'nullable|integer|exists:mst_stores,id',
        ]);

        $store = MstStore::create([
            'name' => $request->storeName,
            'store_type_id' => $request->storeType,
            'parent_store_id' => $request->parentStore,
            'status' => true,
        ]);
        return Inertia::render('MasterRegister/Store/StoreEntry');
    }
}
