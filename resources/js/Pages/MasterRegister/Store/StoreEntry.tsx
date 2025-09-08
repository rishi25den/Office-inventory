import PageBreadcrumb from "@/Pages/tailAdmin/components/common/PageBreadCrumb";
import ComponentCard from "@/Pages/tailAdmin/components/common/ComponentCard";
import Label from "@/Pages/tailAdmin/components/form/Label";
import Input from "@/Pages/tailAdmin/components/form/input/InputField";
import TextArea from "@/Pages/tailAdmin/components/form/input/TextArea";
import InputError from "@/Components/InputError";
import { useForm, Head } from "@inertiajs/react";
import { FormEventHandler } from "react";
import Select from "@/Pages/tailAdmin/components/form/Select";

type StoreOption = {
    value: string;
    label: string;
};

type PageProps = Record<string, unknown>;

interface Props extends PageProps {
    parentStoreList: StoreOption[];
    storeTypeList: StoreOption[];
}

export default function StoreEntry({ parentStoreList, storeTypeList }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        storeName: "",
        parentStore: "",
        storeType: "",
    });

    const handleSelectChange = (value: string, field: string) => {
        // console.log("Selected value:", value);
        field == "parentStore"
            ? setData("parentStore", value)
            : setData("storeType", value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("store.store"), {
            // onFinish: () => alert("Form submitted successfully!"),
        });
    };

    const parentStore = parentStoreList.map((store) => ({
        value: store.value,
        label: store.label,
    }));
    const storeType = storeTypeList.map((storeType) => ({
        value: storeType.value,
        label: storeType.label,
    }));

    return (
        <div>
            <Head title="Register Store">
                <meta name="description" content="Registration for Store" />
            </Head>

            <PageBreadcrumb pageTitle="Store Register" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <ComponentCard title="Create Store">
                    <div className="space-y-6">
                        <div>
                            <form onSubmit={submit}>
                                <div className="space-y-5">
                                    <div>
                                        <Label>
                                            Store Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="text"
                                            name="storeName"
                                            placeholder="Enter Store Name"
                                            value={data.storeName}
                                            onChange={(e) =>
                                                setData(
                                                    "storeName",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.storeName}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <Label>
                                            Store Type
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Select
                                            id="storeType"
                                            name="storeType"
                                            options={storeType}
                                            placeholder="Select Store Type"
                                            searchable={false}
                                            onChange={(storeType) =>
                                                handleSelectChange(
                                                    storeType,
                                                    "storeType"
                                                )
                                            }
                                            className="dark:bg-dark-900"
                                        />
                                        <InputError
                                            message={errors.storeType}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <Label>Parent Store (if any)</Label>
                                        <Select
                                            id="parentStore"
                                            name="parentStore"
                                            options={parentStore}
                                            placeholder="Select Parent Store"
                                            onChange={(parentStore) =>
                                                handleSelectChange(
                                                    parentStore,
                                                    "parentStore"
                                                )
                                            }
                                            className="dark:bg-dark-900"
                                        />
                                        <InputError
                                            message={errors.parentStore}
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
