import { useState } from "react";
import PageBreadcrumb from "../tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "../tailAdmin/components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
import BasicTableTwo from "./BasicTableTwo";
import { Head } from "@inertiajs/react";
// Assume these icons are imported from an icon library
import { ChevronDownIcon } from "../tailAdmin/icons";

interface OrderItem {
    id: number;
    product_name: string;
    quantity: number;
    status: string;
}

interface Order {
    id: number;
    order_number: string;
    order_date: string;
    supplier: string;
    program: string;
    receivedStatus: string;
    items: OrderItem[];
}

export default function OrderList() {
    // Dummy Data
    const orders: Order[] = [
        {
            id: 1,
            order_number: "ORD-1001",
            order_date: "2025-08-25",
            supplier: "ABC Supplies Pvt Ltd",
            program: "Healthcare Program",
            receivedStatus: "Partially Received",
            items: [
                { id: 1, product_name: "Laptop", quantity: 1, status: "Received" },
                { id: 2, product_name: "Mouse", quantity: 2, status: "Not Received" },
            ],
        },
        {
            id: 2,
            order_number: "ORD-1002",
            order_date: "2025-08-26",
            supplier: "XYZ Traders",
            program: "Education Program",
            receivedStatus: "Not Received",
            items: [
                { id: 3, product_name: "Phone", quantity: 1, status: "Not Received" },
                { id: 4, product_name: "Case", quantity: 1, status: "Not Received" },
            ],
        },
    ];

    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleExpand = (orderId: number) => {
        setExpanded(expanded === orderId ? null : orderId);
    };
    return (
        <>
            {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Orders List">
                <meta name="description" content="Orders List" />
            </Head>
            <PageBreadcrumb pageTitle="Orders" />
            <div className="">
                <ComponentCard title="List of Orders">
                    <div className="max-w-6xl mx-auto border-b">                        
                        <div className="space-y-4">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="border shadow-sm bg-white"
                                >
                                    {/* Order Details */}
                                    <div
                                        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                                        onClick={() => toggleExpand(order.id)}
                                    >
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                                            <p>
                                                <span className="font-semibold">Order No:</span>{" "}
                                                {order.order_number}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Received Date:</span>{" "}
                                                {order.order_date}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Supplier:</span>{" "}
                                                {order.supplier}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Program:</span>{" "}
                                                {order.program}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Status:</span> 
                                                {order.receivedStatus}
                                            </p>
                                        </div>
                                        <ChevronDownIcon
                                            className={`ml-auto w-5 h-5 transition-transform duration-200 ${expanded === order.id
                                                ? "rotate-180 text-brand-500"
                                                : ""
                                                }`}
                                        />
                                    </div>

                                    {/* Order Items Collapse */}
                                    {expanded === order.id && (
                                        <div className="p-4 border-t bg-gray-50">
                                            <h3 className="text-sm font-semibold mb-2">Order Items</h3>
                                            <table className="w-full text-sm border">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-2 py-1 border">Product</th>
                                                        <th className="px-2 py-1 border">Qty</th>
                                                        <th className="px-2 py-1 border">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.items.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="px-2 py-1 border">
                                                                {item.product_name}
                                                            </td>
                                                            <td className="px-2 py-1 border text-center">
                                                                {item.quantity}
                                                            </td>
                                                            <td className="px-2 py-1 border">
                                                                ${item.status}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </ComponentCard>
            </div>
        </>
    );
}
