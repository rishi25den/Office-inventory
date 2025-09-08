import ComponentCard from "@/Pages/tailAdmin/components/common/ComponentCard";
import Label from "@/Pages/tailAdmin/components/form/Label";
import Input from "@/Pages/tailAdmin/components/form/input/InputField";
import TextArea from "@/Pages/tailAdmin/components/form/input/TextArea";
import InputError from "@/Components/InputError";
import { FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";

export default function EquipmentForm() {
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
        <ComponentCard title="Create Equipment">
            <div className="space-y-6">
                <div>
                    <form onSubmit={submit}>
                        <div className="space-y-5">
                            <div>
                                <Label>
                                    Equipment
                                    <span className="text-error-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    name="equipmentName"
                                    placeholder="Enter Equipment/Drug Name"
                                    value={data.equipmentName}
                                    onChange={(e) =>
                                        setData("equipmentName", e.target.value)
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
                                    <span className="text-error-500">*</span>
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
    );
}
