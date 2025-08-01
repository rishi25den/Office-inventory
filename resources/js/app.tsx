import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "../js/Pages/tailAdmin/context/ThemeContext";
import { AppWrapper } from "../js/Pages/tailAdmin/components/common/PageMeta";
import AppLayout from "../js/Pages/tailAdmin/layout/AppLayout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // start of part 1
    // resolve: (name) =>

    // resolvePageComponent(
    //     `./Pages/${name}.tsx`,
    //     import.meta.glob("./Pages/**/*.tsx")
    // ),
    // end of part 1

    //start of part 2
    // resolve: async (name) => {
    //     const pages = import.meta.glob("./Pages/**/*.tsx");
    //     const page = await resolvePageComponent(`./Pages/${name}.tsx`, pages);

    //     // Fix: Type assertion
    //     const typedPage = page as { default: any };

    //     // Assign layout if not already defined
    //     typedPage.default.layout =
    //         typedPage.default.layout ||
    //         ((page: React.ReactNode) => <AppLayout>{page}</AppLayout>);

    //     return typedPage;
    // },

    // end of part 2

    // start of part 3

    // end of part 3
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");

        // If the page is Login or Register, use simpleResolve
        if (
            [
                "Auth/Login",
                "Auth/Register",
                "Welcome",
                "tailAdmin/pages/OtherPage/NotFound",
                "tailAdmin/pages/AuthPages/SignIn",
                "tailAdmin/pages/AuthPages/SignUp",
            ].includes(name)
        ) {
            return resolvePageComponent(`./Pages/${name}.tsx`, pages);
        }

        // Else use advancedResolve with layout
        const page = await resolvePageComponent(`./Pages/${name}.tsx`, pages);
        const typedPage = page as { default: any };

        typedPage.default.layout =
            typedPage.default.layout ||
            ((page: React.ReactNode) => <AppLayout>{page}</AppLayout>);

        return typedPage;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <AppWrapper>
                    <App {...props} />
                </AppWrapper>
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
