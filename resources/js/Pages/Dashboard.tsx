/**
 * Previous code starts here.
 */
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard head" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

/**
 * End of previous code.
 */

// import {
//     SidebarProvider,
//     useSidebar,
// } from "../tailAdmin/context/SidebarContext";
// // import { Outlet } from "react-router";
// import AppHeader from "../tailAdmin/layout/AppHeader";
// import Backdrop from "../tailAdmin/layout/Backdrop";
// import AppSidebar from "../tailAdmin/layout/AppSidebar";
// import { Head } from "@inertiajs/react";

// const LayoutContent: React.FC = () => {
//     const { isExpanded, isHovered, isMobileOpen } = useSidebar();

//     return (
//         <>
//             <Head title="Dashboard" />
//             <div className="min-h-screen xl:flex">
//                 <div>
//                     <AppSidebar />
//                     <Backdrop />
//                 </div>
//                 <div
//                     className={`flex-1 transition-all duration-300 ease-in-out ${
//                         isExpanded || isHovered
//                             ? "lg:ml-[290px]"
//                             : "lg:ml-[90px]"
//                     } ${isMobileOpen ? "ml-0" : ""}`}
//                 >
//                     <AppHeader />
//                     <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
//                         {/* <Outlet /> */}
//                         <p>Outlet here</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const AppLayout: React.FC = () => {
//     return (
//         <SidebarProvider>
//             <LayoutContent />
//         </SidebarProvider>
//     );
// };

// export default AppLayout;
