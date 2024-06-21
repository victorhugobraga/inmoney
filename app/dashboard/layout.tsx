import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import HeaderDashboard from "@/components/dashboard/header";
import SidebarDashboard from "@/components/dashboard/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const isPagesLoked = process.env.NEXT_PUBLIC_LOCK_PAGES;
  if (isPagesLoked) {
    redirect("/");
  }

  const cookiesStore = cookies();

  if (!cookiesStore.get("inmoney_session")) {
    redirect("/login");
  }

  return (
    <>
      <TooltipProvider>
        <div className="flex-min-h-screen w-full flex-col bg-muted/40">
          <SidebarDashboard />
          <div className="flex flex-col sm:pl-14">
            <HeaderDashboard />

            {children}

            {/* <FooterDashboard /> */}
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
