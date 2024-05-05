import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownSquare, ArrowUpSquare, Repeat } from "lucide-react";

export default function QuickActions() {
  return (
    <Card className="sm:block hidden">
      <CardHeader>
        <CardTitle>Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-3">
        <Button variant="outline">
          <ArrowUpSquare className="w-5 h-5 mr-2" />
          Receita
        </Button>
        <Button variant="outline">
          <ArrowDownSquare className="w-5 h-5 mr-2" />
          Despesa
        </Button>
        <Button variant="outline">
          <Repeat className="w-5 h-5 mr-2" />
          Transferência
        </Button>
      </CardContent>
    </Card>
  );
}
