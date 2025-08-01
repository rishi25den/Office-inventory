import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
// import PageMeta from "../../components/common/PageMeta";
import { Head } from "@inertiajs/react";

export default function LineChart() {
    return (
        <>
            {/* <PageMeta
                title="React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"
                description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Line Chart">
                <meta name="description" content="Line Chart" />
            </Head>
            <PageBreadcrumb pageTitle="Line Chart" />
            <div className="space-y-6">
                <ComponentCard title="Line Chart 1">
                    <LineChartOne />
                </ComponentCard>
            </div>
        </>
    );
}
