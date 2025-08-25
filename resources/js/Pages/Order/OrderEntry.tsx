import PageBreadcrumb from "../tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "../tailAdmin/components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../tailAdmin/components/tables/BasicTables/BasicTableOne";
import { Head } from "@inertiajs/react";

export default function OrderEntry() {
    return (
        <>
            {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Order Entry">
                <meta name="description" content="Order Entry" />
            </Head>
            <PageBreadcrumb pageTitle="Order Entry" />
            <div className="space-y-6">
                <ComponentCard title="Order Entry">
                    Add Form Here
                </ComponentCard>
            </div>
        </>
    );
}
