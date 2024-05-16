import Cards from "@/components/dashboard/wallet/cards";
import Transactions from "@/components/dashboard/wallet/transactions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDownSquare, ArrowUpSquare, Repeat } from "lucide-react";

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
              <div className="text-sm text-gray-500 dark:text-gray-400 sm:block hidden">
                Saldo disponível
              </div>
            </div>
          </CardContent>

          <CardFooter className="grid gap-3 grid-cols-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <ArrowUpSquare className="w-5 h-5 mr-2" />
                  Receita
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="space-y-4">
                  <DialogTitle>Cadastrar Receita</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Digite o seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Digite o seu email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar</Label>
                    <Input id="avatar" type="file" />
                  </div>
                </DialogDescription>
                <DialogFooter>
                  <Button>Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <ArrowDownSquare className="w-5 h-5 mr-2" />
              Despesa
            </Button>
            <Button variant="outline">
              <Repeat className="w-5 h-5 mr-2" />
              Transferência
            </Button>
          </CardFooter>
        </Card>
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
        <Cards />
      </div>
      <Transactions />
    </main>
  );
}
