import PageBreadcrumb from "../tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "../tailAdmin/components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
import BasicTableTwo from "./BasicTableTwo";
import { Head } from "@inertiajs/react";

export default function OrderList() {
    return (
        <>
            {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Order List">
                <meta name="description" content="Order List" />
            </Head>
            <PageBreadcrumb pageTitle="Order List" />
            <div className="space-y-6">             
                <ComponentCard title="Filter">
                    <BasicTableTwo />
                </ComponentCard>
            </div>
        </>
    );
}
