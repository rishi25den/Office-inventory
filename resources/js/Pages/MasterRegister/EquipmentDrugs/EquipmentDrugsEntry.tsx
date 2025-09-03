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
        description: "",
        equipmentName: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("equipment.store"), {
            // onFinish: () => alert("Form submitted successfully!"),
        });
    };

    return (
        <div>
            <Head title="Register Equipment / Drugs">
                <meta
                    name="description"
                    content="Registration for Equipment and Drugs"
                />
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
                                            Equipment/Drug Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="text"
                                            name="equipmentName"
                                            placeholder="Enter Equipment/Drug Name"
                                            value={data.equipmentName}
                                            onChange={(e) =>
                                                setData(
                                                    "equipmentName",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.equipmentName}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label>
                                            Description
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <TextArea
                                            name="description"
                                            placeholder="Enter description"
                                            value={data.description}
                                            onChange={(value) =>
                                                setData("description", value)
                                            }
                                            rows={6}
                                        />
                                        <InputError
                                            message={errors.description}
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
