import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import HeaderDashboard from "@/components/dashboard/header";
import SidebarDashboard from "@/components/dashboard/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TooltipProvider>
        <div className="flex-min-h-screen w-full flex-col bg-muted/40">
          <SidebarDashboard />
          <div className="flex flex-col sm:pl-14">
            <HeaderDashboard />

            {children}
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
