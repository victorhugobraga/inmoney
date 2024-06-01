import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddExpense from "./addExpense";
import AddRevenue from "./addRevenue";

export default function BalanceAvailable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saldo</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-3xl font-bold">R$ 12.345,67</div>
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
