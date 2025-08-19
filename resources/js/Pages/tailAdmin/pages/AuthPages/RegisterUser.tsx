import { useState } from "react";
// import { Link } from "react-router";
import { Link, useForm } from "@inertiajs/react";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Checkbox from "../../components/form/input/Checkbox";
import { FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import { Head } from "@inertiajs/react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Select from "../../components/form/Select";

// 1. Define type for each store option
type StoreOption = {
    value: string;
    label: string;
};

// 2. Extend Inertia Page props
// If you have a global PageProps type, import it like this:
// import { PageProps } from '@/types';

// Otherwise, define a minimal PageProps type here:
type PageProps = Record<string, unknown>;

interface Props extends PageProps {
    storeList: StoreOption[];
}

export default function RegisterUser({ storeList }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const store = storeList.map((store) => ({
        value: store.value,
        label: store.label,
    }));

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
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
                        <div className="mb-5 sm:mb-8 flex justify-between gap-2">
                            {/* <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Enter details to create new user!
                                </p>
                            </div> */}
                            <div className="">
                                <Label>
                                    Select Store / Administrator Account
                                </Label>
                                <Select
                                    options={store}
                                    placeholder="Select Store"
                                    onChange={handleSelectChange}
                                    className="dark:bg-dark-900"
                                />
                            </div>
                        </div>
                        <div>
                            <form onSubmit={submit}>
                                <div className="space-y-5">
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

                                    {/* <!-- Checkbox --> */}
                                    {/* <div className="flex items-center gap-3">
                                    <Checkbox
                                        className="w-5 h-5"
                                        checked={isChecked}
                                        onChange={setIsChecked}
                                    />
                                    <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                                        By creating an account means you agree
                                        to the{" "}
                                        <span className="text-gray-800 dark:text-white/90">
                                            Terms and Conditions,
                                        </span>{" "}
                                        and our{" "}
                                        <span className="text-gray-800 dark:text-white">
                                            Privacy Policy
                                        </span>
                                    </p>
                                </div> */}
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
