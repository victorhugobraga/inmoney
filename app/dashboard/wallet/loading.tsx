import { Card } from "@/components/ui/card";

export default function WalletLoading() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="h-48 bg-slate-300 dark:bg-slate-700 rounded-lg animate-pulse"></Card>
        <Card className="h-48 bg-slate-300 dark:bg-slate-700 rounded-lg animate-pulse"></Card>
        <Card className="h-48 bg-slate-300 dark:bg-slate-700 rounded-lg animate-pulse"></Card>
      </div>

      <Card className="h-96 bg-slate-300 dark:bg-slate-700 rounded-lg animate-pulse"></Card>
    </main>
  );
}
