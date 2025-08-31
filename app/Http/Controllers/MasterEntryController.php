<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\MstEquipmentDrug as Equipment;
use App\Models\MstSupplier;
use App\Models\MstStore;
use App\Models\MstStoreType;


class MasterEntryController extends Controller
{
    /**
     * Show the form for creating a new equipment/drug entry.
     */
    public function createEquipment(): Response
    {
        return Inertia::render('MasterRegister/EquipmentDrugs/EquipmentDrugsEntry');      
    }

    /**
     * Store a newly created equipment/drug entry.
     */

    public function storeEquipment(Request $request): Response
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

        return Inertia::render('MasterRegister/EquipmentDrugs/DrugsEntry');
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
