// import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";
import { Head } from "@inertiajs/react";

export default function SignIn() {
    return (
        <>
            {/* <PageMeta title="TixMark - Sign In" description="" /> */}
            <Head title="Sign In">
                <meta name="description" content="Sign in to your account" />
            </Head>
            <AuthLayout>
                <SignInForm />
            </AuthLayout>
        </>
    );
}
