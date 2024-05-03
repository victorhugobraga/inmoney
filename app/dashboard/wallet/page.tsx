import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveIcon, ReceiptIcon, SendIcon } from "lucide-react";

export default function Wallet() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-3xl font-bold">R$ 12.345,67</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Saudo disponível
              </div>
            </div>
            <Button size="sm" variant="outline">
              Depósito
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                  <ReceiptIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Depósito</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Maio 3, 2024
                  </div>
                </div>
              </div>
              <div className="text-green-500">+$1,000.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                  <SendIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Withdrawal</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    April 28, 2024
                  </div>
                </div>
              </div>
              <div className="text-red-500">-$500.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                  <MoveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Transfer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    April 15, 2024
                  </div>
                </div>
              </div>
              <div className="text-red-500">-$250.00</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline">
              View All
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline">
              <ReceiptIcon className="w-5 h-5 mr-2" />
              Deposit
            </Button>
            <Button variant="outline">
              <SendIcon className="w-5 h-5 mr-2" />
              Withdraw
            </Button>
            <Button variant="outline">
              <MoveIcon className="w-5 h-5 mr-2" />
              Send
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>May 3, 2024</TableCell>
                <TableCell>Deposit</TableCell>
                <TableCell className="text-green-500">+$1,000.00</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 28, 2024</TableCell>
                <TableCell>Withdrawal</TableCell>
                <TableCell className="text-red-500">-$500.00</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 15, 2024</TableCell>
                <TableCell>Transfer</TableCell>
                <TableCell className="text-red-500">-$250.00</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 10, 2024</TableCell>
                <TableCell>Deposit</TableCell>
                <TableCell className="text-green-500">+$2,000.00</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 5, 2024</TableCell>
                <TableCell>Withdrawal</TableCell>
                <TableCell className="text-red-500">-$750.00</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
