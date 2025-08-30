// import PageMeta from "../../components/common/PageMeta";
// import AuthLayout from "./AuthPageLayout";
// import SignUpForm from "../../components/auth/SignUpForm";
// import { Head } from "@inertiajs/react";

import { useState, FormEventHandler } from "react";
import { Link, useForm } from "@inertiajs/react";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
// import Checkbox from "../../components/form/input/Checkbox";
import InputError from "@/Components/InputError";
import { Head } from "@inertiajs/react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Select from "../../components/form/Select";

type StoreOption = {
    value: string;
    label: string;
};

type PageProps = Record<string, unknown>;

interface Props extends PageProps {
    storeList: StoreOption[];
}

// export default function SignUp() {
//     // return (
//     //     <>
//     //         {/* <PageMeta
//     //             title="Sign Up"
//     //             description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//     //         /> */}
//     //         <Head title="Register">
//     //             <meta name="description" content="Register your account" />
//     //         </Head>
//     //         <AuthLayout>
//     //             <SignUpForm />
//     //         </AuthLayout>
//     //     </>
//     // );
// }

export default function SignUp({ storeList }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        store: "",
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("signup"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const store = [
        {
            value: "admin",
            label: "Administrator",
        },
        ...storeList.map((store) => ({
            value: store.value,
            label: store.label,
        })),
    ];

    const handleSelectChange = (value: string) => {
        // console.log("Selected value:", value);
        setData("store", value);
    };

    return (
        <div>
            <Head title="Register New User">
                <meta name="description" content="Form Elements" />
            </Head>
            <PageBreadcrumb pageTitle="Register User" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <ComponentCard title="Create New User">
                    <div className="space-y-6">
                        <div>
                            <form onSubmit={submit}>
                                <div className="space-y-5">
                                    <div className="flex justify-between gap-2">
                                        <div>
                                            <Label>
                                                Store
                                                <span className="text-error-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Select
                                                id="store"
                                                name="store"
                                                options={store}
                                                placeholder="Select Store"
                                                onChange={handleSelectChange}
                                                className="dark:bg-dark-900"
                                            />
                                            <InputError
                                                message={errors.store}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>
                                            Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* <!-- Username --> */}
                                    <div>
                                        <Label>
                                            Username
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="username"
                                            type="username"
                                            name="username"
                                            value={data.username}
                                            placeholder="Enter your username"
                                            onChange={(e) =>
                                                setData(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.username}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* <!-- Password --> */}
                                    <div>
                                        <Label>
                                            Password
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                // type="password"
                                                name="password"
                                                value={data.password}
                                                placeholder="Enter your password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                            />

                                            <span
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className={`absolute z-30 -translate-y-1/2 cursor-pointer right-4 ${
                                                    errors.password
                                                        ? "top-1/3"
                                                        : "top-1/2"
                                                } `}
                                            >
                                                {showPassword ? (
                                                    <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                                                ) : (
                                                    <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                                                )}
                                            </span>
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    {/* <!-- Confirm Password --> */}

                                    <div>
                                        <Label>
                                            Confirm Password
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            placeholder="Confirm your password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* <!-- Button --> */}
                                    <div>
                                        <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                                            Sign Up
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
