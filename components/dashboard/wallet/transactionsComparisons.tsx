import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownSquare, ArrowUpSquare } from "lucide-react";

import { ApiService } from "@/app/api/apiService";
import { formatMoney } from "@/lib/utils";
import { cookies } from "next/headers";

export default async function TransactionsComparisons() {
  const cookieStore = cookies();
  const token = cookieStore.get("inmoney_session");

  const apiService = new ApiService(token?.value);
  const balance = await apiService.getBalance();

  const total = balance.data?.total ?? 0;
  const revenueTotal = (balance.data?.balance ?? 0) + (balance.data?.cash ?? 0);
  const expenseTotal = balance.data?.expense ?? 0;

  if (!balance.success) console.error("Erro ao buscar saldo", balance.message);

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
          <div className="text-green-500">+{formatMoney(revenueTotal)}</div>
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
          <div className="text-red-500">{formatMoney(expenseTotal)}</div>
        </div>
      </CardContent>
    </Card>
  );
}
