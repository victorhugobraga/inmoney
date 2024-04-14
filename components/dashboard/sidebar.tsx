"use client";

import { Home, Lightbulb, LineChart, Settings, Wallet } from "lucide-react";
import Link from "next/link";

import { Pages } from "@/app/dashboard/enums";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

export default function SidebarDashboard() {
  const pathname = usePathname();

  const activePage = (page: Pages) =>
    pathname === page
      ? "bg-accent text-accent-foreground"
      : "text-muted-foreground";

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={Pages.Dashboard}
              className={`flex h-9 w-9 items-center justify-center ${activePage(
                Pages.Dashboard
              )} rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={Pages.Wallet}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${activePage(
                Pages.Wallet
              )} transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Wallet className="h-5 w-5" />
              <span className="sr-only">Wallet</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Wallet</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={Pages.Learn}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${activePage(
                Pages.Learn
              )} transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Lightbulb className="h-5 w-5" />
              <span className="sr-only">Learn</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Learn</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Analytics</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Comming Soon</TooltipContent>
        </Tooltip>
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={Pages.Settings}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${activePage(
                Pages.Settings
              )} transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
