import { ApiService } from "@/app/api/apiService";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatMoney } from "@/lib/utils";
import { cookies } from "next/headers";
import AddExpense from "./addExpense";
import AddRevenue from "./addRevenue";

export default async function BalanceAvailable() {
  const cookieStore = cookies();
  const token = cookieStore.get("inmoney_session");

  const apiService = new ApiService(token?.value);
  const balance = await apiService.getBalance();

  const total = balance.data?.total ?? 0;
  if (!balance.success) console.error("Erro ao buscar saldo", balance.message);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saldo</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-3xl font-bold">{formatMoney(total)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 sm:block hidden">
            Saldo disponível
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-3 flex">
        <AddRevenue />
        <AddExpense />
      </CardFooter>
    </Card>
  );
}
