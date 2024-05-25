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
            <DialogDescription className="space-y-8">
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
  );
}
