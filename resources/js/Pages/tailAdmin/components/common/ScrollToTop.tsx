import { useEffect } from "react";
// import { useLocation } from "react-router";
import { usePage } from "@inertiajs/react";

export function ScrollToTop() {
    // const { pathname } = useLocation();
    const { url, props } = usePage();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [url]);

    return null;
}
