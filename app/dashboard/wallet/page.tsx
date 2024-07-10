import BalanceAvailable from "@/components/dashboard/wallet/balanceAvailable";
import Banks from "@/components/dashboard/wallet/banks";
import Transactions from "@/components/dashboard/wallet/transactions";
import TransactionsComparisons from "@/components/dashboard/wallet/transactionsComparisons";
import { WalletProvider } from "@/context/walletContext";

export default function Wallet() {
  return (
    <WalletProvider>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BalanceAvailable />
          <TransactionsComparisons />
          <Banks />
        </div>
        <Transactions />
      </main>
    </WalletProvider>
  );
}
