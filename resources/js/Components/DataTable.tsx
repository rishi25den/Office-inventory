import { useState, useEffect, useCallback, useRef } from "react";
import { router } from "@inertiajs/react";
import debounce from "lodash.debounce";
import { ChevronDown } from "lucide-react";

import Select from "@/Pages/tailAdmin/components/form/Select";
import Input from "@/Pages/tailAdmin/components/form/input/InputField";
import Pagination from "@/Components/Pagination";
import { perPageOptions } from "@/Constants/SelectOptions";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/Pages/tailAdmin/components/ui/table";

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedData<T> {
    data: T[];
    current_page: number;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
    links: PaginationLink[];
}

interface DataTableProps<T> {
    /** Backend data with pagination */
    records: PaginatedData<T>;

    /** Search placeholder text */
    searchPlaceholder?: string;

    /** Backend route name */
    routeName: string;

    /** Initial filters from props */
    filters: { search?: string; per_page?: string };

    /** Table headers */
    columns: string[];

    /** How to render each row */
    renderRow: (record: T, index: number) => React.ReactNode;
}

export default function DataTable<T>({
    records,
    routeName,
    filters,
    columns,
    renderRow,
    searchPlaceholder = "Search...",
}: DataTableProps<T>) {
    const [search, setSearch] = useState(filters.search || "");
    const [perPage, setPerPage] = useState(filters.per_page || "10");
    const isFirstLoad = useRef(true);

    // Debounced search
    const runSearch = useCallback(
        debounce((value: string, perPage: string) => {
            router.get(
                route(routeName),
                { search: value, per_page: perPage },
                { preserveState: true, replace: true }
            );
        }, 400),
        []
    );

    // When search changes
    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }
        runSearch(search, perPage);

        return () => {
            runSearch.cancel?.();
        };
    }, [search, perPage]);

    // Handle per-page change
    function handlePerPageChange(value: string) {
        setPerPage(value);
        router.get(
            route(routeName),
            { search, per_page: value },
            { preserveState: true, replace: true }
        );
    }

    return (
        <div className="w-full">
            {/* Top Controls */}
            <div className="flex items-center justify-between mb-4">
                {/* Per-page */}
                <div className="flex items-center gap-2">
                    <label htmlFor="perPage" className="text-sm text-gray-700 dark:text-gray-400">
                        Show
                    </label>
                    <div className="relative inline-block">
                        <Select
                            options={perPageOptions}
                            defaultValue={perPage}
                            onChange={handlePerPageChange}
                            size="sm"
                            className="h-8 w-10 pl-1 pr-4 text-md"
                        />
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-400">records</span>
                </div>

                {/* Search */}
                <div className="w-50">
                    <Input
                        type="text"
                        size="sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={searchPlaceholder}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        <TableHeader className="border-b border-gray-200 dark:border-white/[0.05]">
                            <TableRow>
                                {columns.map((col, idx) => (
                                    <TableCell
                                        key={idx}
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-sm dark:text-gray-400"
                                    >
                                        {col}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-200 dark:divide-white/[0.05]">
                            {records.data.map((r, i) => renderRow(r, i))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700 dark:text-gray-400">
                    Showing {records.from} to {records.to} of {records.total} records
                </div>
                <div className="flex space-x-1">
                    <Pagination links={records.links} />
                </div>
            </div>            
        </div>
    );
}