// import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";
import { Head } from "@inertiajs/react";

export default function SignUp() {
    return (
        <>
            {/* <PageMeta
                title="Sign Up"
                description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            <Head title="Register">
                <meta name="description" content="Register your account" />
            </Head>
            <AuthLayout>
                <SignUpForm />
            </AuthLayout>
        </>
    );
}
