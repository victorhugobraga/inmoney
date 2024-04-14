import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import SidebarDashboard from "@/components/dashboard/sidebar";
import HeaderDashboard from "@/components/dashboard/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TooltipProvider>
        <div className="flex-min-h-screen w-full flex-col bg-muted/40">
          <SidebarDashboard />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <HeaderDashboard />
            {children}
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
