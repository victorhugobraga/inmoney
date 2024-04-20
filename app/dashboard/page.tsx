import { ListFilter, PlusCircle } from "lucide-react";

import TransactionSummary from "@/components/dashboard/transactionSummary";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto flex flex-col w-full max-w-6xl gap-5 ">
        <div className="flex items-center gap-2">
          <Card className="mx-w-lg text-balance leading-relaxed p-4 flex-1 flex items-center justify-between">
            <CardTitle>R$ 5.000,00</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filtro</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Receita
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Despesas</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Tudo</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>
          <Button
            variant="ghost"
            className="text-green-500 hover:text-green-300"
          >
            <PlusCircle />
          </Button>
        </div>

        <TransactionSummary />
      </div>
    </main>
  );
}
