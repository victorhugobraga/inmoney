"use client";
import { ApiService } from "@/app/api/apiService";
import { Balance } from "@/types/api/balance";
import { Payment, TransactionType } from "@/types/api/wallet";
import { createContext, useState } from "react";

interface WalletContextType {
  balance: Balance;
  getBalance: () => void;
  createPaymentPosting: (payment: Payment) => void;
}

export const WalletContext = createContext({} as WalletContextType);

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [balance, setBalance] = useState<Balance>({} as Balance);

  const apiService = new ApiService();

  async function getBalance() {
    try {
      const balance = await apiService.getBalance();

      if (balance.success && balance.data) {
        setBalance(balance.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function createPaymentPosting(payment: Payment) {
    try {
      const revenueData = await apiService.increaseRevenue(payment);

      if (revenueData.success) {
        revenueData.data;

        const total = payment.transactions.reduce(
          (acc, curr) =>
            curr.transaction_type === TransactionType.REVENUE
              ? acc + curr.amount
              : acc - curr.amount,
          0
        );

        setBalance((prev) => {
          return {
            ...prev,
            total: prev.total + total,
          };
        });
      }
    } catch (error) {
      throw new Error("Erro ao adicionar receita " + error);
    }
  }

  // useEffect(() => {
  //   getBalance();
  // }, []);

  return (
    <WalletContext.Provider
      value={{ balance, getBalance, createPaymentPosting }}
    >
      {children}
    </WalletContext.Provider>
  );
}
