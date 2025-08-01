// import { SidebarProvider, useSidebar } from "../context/SidebarContext";
// import { Outlet } from "react-router";
// import AppHeader from "./AppHeader";
// import Backdrop from "./Backdrop";
// import AppSidebar from "./AppSidebar";

// const LayoutContent: React.FC = () => {
//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

//   return (
//     <div className="min-h-screen xl:flex">
//       <div>
//         <AppSidebar />
//         <Backdrop />
//       </div>
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${
//           isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
//         } ${isMobileOpen ? "ml-0" : ""}`}
//       >
//         <AppHeader />
//         <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// const AppLayout: React.FC = () => {
//   return (
//     <SidebarProvider>
//       <LayoutContent />
//     </SidebarProvider>
//   );
// };

// export default AppLayout;

import React from "react";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    return (
        <div className="min-h-screen xl:flex">
            <>
                <AppSidebar />
                <Backdrop />
            </>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
                } ${isMobileOpen ? "ml-0" : ""}`}
            >
                <AppHeader />
                <div className="p-4 mx-auto max-w-7xl md:p-6">{children}</div>
            </div>
        </div>
    );
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SidebarProvider>
            <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>
    );
};

export default AppLayout;
