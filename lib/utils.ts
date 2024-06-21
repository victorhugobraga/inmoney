import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatMoney = (value: number, zeroInReal?: boolean): string => {
  if (!value && !zeroInReal) return "R$ 0,00";
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
};
