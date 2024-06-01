"use client";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownSquare } from "lucide-react";

export default function AddExpense() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <ArrowDownSquare className="w-5 h-5 mr-2" />
          Despesa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center gap-1">
            <ArrowDownSquare className="w-5 h-5 mr-2" /> Cadastrar Despesa
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-8">
          <div className="space-y-1 flex items-baseline space-x-2">
            <span className="font-bold">R$</span>
            <Input className="rounded-none border-x-0 border-t-0 focus-visible:border-red-500 focus-visible:ring-0 p-1 pb-0 text-xl font-bold" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Descrição</Label>
            <Input placeholder="" />
          </div>

          <div className="flex gap-4">
            <div className="space-y-1 flex-1">
              <Label htmlFor="email">Banco</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o banco" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nenhum">Nenhum</SelectItem>
                  <SelectItem value="nubank">NuBank</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1 flex-1">
              <Label htmlFor="email">Parcelas</Label>
              <Input type="number" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <Label htmlFor="email">Data</Label>
              <Input type="date" />
            </div>
            <div className="flex-1 space-y-1">
              <Label htmlFor="email">Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lazer">Lazer</SelectItem>
                  <SelectItem value="comida">Comida</SelectItem>
                  <SelectItem value="uber">Uber</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button>Salvar</Button>
          <Button variant="outline">Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
