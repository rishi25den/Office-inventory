import { useNavigate } from "react-router-dom";
// import { Inertia } from "@inertiajs/inertia";

const useGoBack = () => {
    const navigate = useNavigate();

    const goBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1); // Go back to the previous page
            // Inertia.visit(-1); // Use Inertia to go back
        } else {
            navigate("/"); // Redirect to home if no history exists
            // Inertia.visit("/"); // Use Inertia to go to home
        }
    };

    return goBack;
};

export default useGoBack;
