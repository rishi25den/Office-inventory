import PageBreadcrumb from "@/Pages/tailAdmin/components/common/PageBreadCrumb";
import { Head } from "@inertiajs/react";
import EquipmentForm from "./EquipmentForm";
import EquipmentList from "./EquipmentList";

// const Button = lazy(
//     () => import("../../tailAdmin/components/ui/button/Button")
// );

export default function EquipmentDrugsEntry() {
    return (
        <div>
            <Head title="Register Equipment">
                <meta name="description" content="Registration for Equipment" />
            </Head>
            <PageBreadcrumb pageTitle="Equipment Register" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <EquipmentForm />
                </div>
                <div className="space-y-6">
                    <EquipmentList />
                </div>
            </div>
        </div>
    );
}
