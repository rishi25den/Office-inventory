import ComponentCard from "@/Pages/tailAdmin/components/common/ComponentCard";
import DataTable from "@/Components/DataTable";
import { TableCell, TableRow } from "@/Pages/tailAdmin/components/ui/table";
import { lazy } from "react";
import { usePage, Link } from "@inertiajs/react";

const Badge = lazy(() => import("../../tailAdmin/components/ui/badge/Badge"));

export default function EquipmentForm() {
    const { equipmentList, filters } = usePage().props as any;

    return (
        <ComponentCard title="Equipment List">
            <DataTable
                records={equipmentList}
                routeName="equipment.create"
                filters={filters}
                searchPlaceholder="Search..."
                columns={[
                    "#",
                    "Equipment Name",
                    "Description",
                    "Status",
                    "Action",
                ]}
                renderRow={(eqList: any, index: number) => (
                    <TableRow key={eqList.id}>
                        <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-300">
                            {(equipmentList.from ?? 0) + index}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-300">
                            {eqList.name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-300">
                            {eqList.description}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-300">
                            <Badge
                                size="sm"
                                color={
                                    eqList.status === 1 ? "success" : "error"
                                }
                            >
                                {eqList.status === 1 ? "Active" : "Inactive"}
                            </Badge>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-300">
                            <Link
                                className="text-slate-500 hover:bg-slate-700 hover:text-white w-15 mr-1 h-6"
                                href="#"
                            >
                                Edit
                            </Link>
                            <Link
                                href="#"
                                className="text-red-500 hover:bg-red-700 hover:text-white w-15 h-6"
                            >
                                Delete
                            </Link>
                        </TableCell>
                    </TableRow>
                )}
            />
        </ComponentCard>
    );
}
