import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownSquare, ArrowUpSquare } from "lucide-react";

export default function TransactionsComparisons() {
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
                Total de receitas{" "}
                <small className="text-gray-500">(05/04 - 05/05)</small>
              </div>
            </div>
          </div>
          <div className="text-green-500">+$1,000.00</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
              <ArrowDownSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium">Despesas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 sm:block hidden">
                Total de despesas{" "}
                <small className="text-gray-500">(05/04 - 05/05)</small>
              </div>
            </div>
          </div>
          <div className="text-red-500">-$500.00</div>
        </div>
      </CardContent>
    </Card>
  );
}
