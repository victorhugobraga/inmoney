import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownSquare, ArrowUpSquare } from "lucide-react";

import { formatMoney } from "@/lib/utils";

export default async function TransactionsComparisons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
              <ArrowUpSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium">Receitas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 sm:block hidden">
                Total de receitas
              </div>
            </div>
          </div>
          <div className="text-green-500">+{formatMoney(20)}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
              <ArrowDownSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium">Despesas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 sm:block hidden">
                Total de despesas
              </div>
            </div>
          </div>
          <div className="text-red-500">{formatMoney(20)}</div>
        </div>
      </CardContent>
    </Card>
  );
}
