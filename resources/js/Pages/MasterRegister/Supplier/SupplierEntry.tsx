import PageBreadcrumb from "@/Pages/tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "@/Pages/tailAdmin/components/common/ComponentCard";
import Label from "@/Pages/tailAdmin/components/form/Label";
import Input from "@/Pages/tailAdmin/components/form/input/InputField";
import TextArea from "@/Pages/tailAdmin/components/form/input/TextArea";
import InputError from "@/Components/InputError";
import { useForm, Head } from "@inertiajs/react";
import { FormEventHandler } from "react";
export default function EquipmentDrugsEntry() {
    const { data, setData, post, processing, errors, reset } = useForm({
        address: "",
        supplierName: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("supplier.store"), {
            // onFinish: () => alert("Form submitted successfully!"),
        });
    };

    return (
        <div>
            <Head title="Register Supplier">
                <meta name="description" content="Registration for Supplier" />
            </Head>

            <PageBreadcrumb pageTitle="Equipment Or Drugs Register" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <ComponentCard title="Create Equipment/Drugs">
                    <div className="space-y-6">
                        <div>
                            <form onSubmit={submit}>
                                <div className="space-y-5">
                                    <div>
                                        <Label>
                                            Supplier Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="text"
                                            name="supplierName"
                                            placeholder="Enter supplier name"
                                            value={data.supplierName}
                                            onChange={(e) =>
                                                setData(
                                                    "supplierName",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.supplierName}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label>
                                            Address
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <TextArea
                                            name="address"
                                            placeholder="Enter address"
                                            value={data.address}
                                            onChange={(value) =>
                                                setData("address", value)
                                            }
                                            rows={6}
                                        />
                                        <InputError
                                            message={errors.address}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <button className="flex items-center justify-center px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </ComponentCard>
            </div>
        </div>
    );
}
