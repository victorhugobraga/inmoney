"use client";
import { ApiService } from "@/app/api/apiService";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowDownSquare } from "lucide-react";
import Notiflix from "notiflix";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const revenueSchema = zod.object({
  value: zod.string(),
  description: zod
    .string()
    .min(3, "Descrição precisa ter ao menos 3 caracteres."),
  bank: zod.string(),
  date: zod.string().min(10),
  category: zod.string(),
  installments: zod.number().min(1, "Parcelas precisam ser maiores que 0"),
});

type RevenueData = zod.infer<typeof revenueSchema>;

export default function AddExpense() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RevenueData>({
    resolver: zodResolver(revenueSchema),
    defaultValues: {
      value: "R$ 0,00",
      description: "",
      bank: "",
      date: new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0],
      category: "",
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    let centavos = parseInt(value, 10); // Trata o valor como centavos
    if (isNaN(centavos)) {
      centavos = 0;
    }
    let reais = centavos / 100; // Converte centavos para reais
    let formattedValue = reais.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    event.target.value = formattedValue;
  };

  function extractMonetaryValue(currencyString: string) {
    let extractedValue = currencyString.match(/\d+,\d+/);

    if (extractedValue) {
      let convertedValue = extractedValue[0].replace(",", ".");

      let numericValue = parseFloat(convertedValue);

      return numericValue;
    } else {
      return NaN;
    }
  }
  const handleSave = async (revenue: RevenueData) => {
    Notiflix.Loading.pulse("Salvando...");

    const value = extractMonetaryValue(revenue.value);

    if (typeof value != "number" || value <= 0) {
      Notiflix.Notify.failure("Valor precisar ser maior que 0");
      Notiflix.Loading.remove();
      return;
    }

    try {
      const apiService = new ApiService();
      const revenueObj = {
        amount: value,
        description: revenue.description,
        payment_type_id: 1,
        installments: 0,
        bank_account_id:
          revenue.bank === "nenhum" || revenue.bank === "" ? null : 1,
        tags: [],
        transactions: [
          {
            amount: Number(revenue.value.replace(/\D/g, "")),
            description: revenue.description,
            transaction_type: 1,
          },
        ],
      };
      const revenueData = await apiService.increaseRevenue(revenueObj);
      console.log(revenueData);
    } catch (error: any) {
      Notiflix.Report.failure("Erro", error.message, "Ok");
    } finally {
      Notiflix.Loading.remove();
    }
  };

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
            <span className="font-bold">Valor</span>
            <Input
              className="rounded-none border-x-0 border-t-0 focus-visible:border-red-500 focus-visible:ring-0 p-1 pb-0 text-xl font-bold"
              {...register("value", {
                required: true,
                onChange: handleChange,
              })}
            />
          </div>
          <div className="space-y-1 relative">
            <Label htmlFor="email">Descrição</Label>
            <Input
              placeholder="Descreva a sua receita"
              {...register("description", { required: true })}
            />
            <span className="text-xs text-muted-foreground absolute">
              {errors.description ? errors.description.message : " "}
            </span>
          </div>

          <div className="flex gap-4 sm:flex-row flex-col">
            <div className="space-y-1 flex-1">
              <Label htmlFor="email">Banco</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Selecione o banco"
                    {...register("bank")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nenhum">Nenhum</SelectItem>
                  <SelectItem value="nubank">NuBank</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1 flex-1 relative">
              <Label htmlFor="email">Parcelas</Label>
              <Input
                type="number"
                placeholder="Quantidade de parcelas"
                {...register("installments")}
              />
              <span className="text-xs text-muted-foreground absolute">
                {errors.installments ? errors.installments.message : " "}
              </span>
            </div>
          </div>

          <div className="flex gap-4 sm:flex-row flex-col">
            <div className="flex-1 space-y-1">
              <Label htmlFor="email">Data</Label>
              <Input type="date" {...register("date")} />
            </div>
            <div className="flex-1 space-y-1">
              <Label htmlFor="email">Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Selecione"
                    {...register("category", { required: true })}
                  />
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
          <Button onClick={handleSubmit(handleSave)}>Salvar</Button>
          <Button variant="outline" className="sm:mb-0 mb-4">
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
