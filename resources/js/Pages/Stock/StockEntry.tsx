import { useEffect, useState, lazy, Suspense } from "react";
import { Head } from "@inertiajs/react";

import PageBreadcrumb from "../tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "../tailAdmin/components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../tailAdmin/components/tables/BasicTables/BasicTableOne";
import Input from "../tailAdmin/components/form/input/InputField";
import Label from "../tailAdmin/components/form/Label";
import Radio from "../tailAdmin/components/form/input/Radio";
const Select = lazy(() => import("../tailAdmin/components/form/Select"));
const Button = lazy(() => import("../tailAdmin/components/ui/button/Button"));
import InputError from '@/Components/InputError';
import { statusOptions } from "../../Constants/SelectOptions";

export default function StockEntry() {
    const [selectedValue, setSelectedValue] = useState<string>("option2");
    
      const handleRadioChange = (value: string) => {
        setSelectedValue(value);
      };

    return (
        <>
            {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Stock Entry">
                <meta name="description" content="Stock Entry" />
            </Head>
            <PageBreadcrumb pageTitle="Stock Entry" />
            <div className="space-y-6">
                <ComponentCard title="Stock Entry">
                    <form className="flex flex-col">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3"> 
                            <div>
                                <Label>Received From </Label>
                                <div className="flex flex-wrap items-center gap-8">                                  
                                    <Radio
                                        id="radio1"
                                        name="group1"
                                        value="option1"
                                        checked={selectedValue === "option1"}
                                        onChange={handleRadioChange}
                                        label="Supplier"
                                    />
                                    <Radio
                                        id="radio2"
                                        name="group1"
                                        value="option2"
                                        checked={selectedValue === "option2"}
                                        onChange={handleRadioChange}
                                        label="Donor"
                                    />
                                </div>
                            </div>                         
                            <div>
                                <Label>Supplier Name </Label>
                                <Select
                                options={statusOptions}
                                onChange={(val) => console.log(val)}
                                // defaultValue={String(data.status)}
                                />
                            </div>
                            <div>
                                <Label>Program / Health Facility </Label>
                                <Select
                                options={statusOptions}
                                onChange={(val) => console.log(val)}
                                // defaultValue={String(data.status)}
                                />
                            </div>                           
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                            <Button  type="button" size="xs">Add Items</Button>                          
                        </div>
                    </form>
                </ComponentCard>
            </div>
        </>
    );
}
