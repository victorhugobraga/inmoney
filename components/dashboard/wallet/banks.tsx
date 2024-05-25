import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function Banks() {
  return (
    <Card className="sm:block hidden">
      <CardHeader>
        <CardTitle>Bancos</CardTitle>
      </CardHeader>

      <CardContent className="flex gap-3">
        <Button variant="outline" className="w-fit">
          <CreditCard className="w-5 h-5 mr-2" />
          Gerenciar bancos
        </Button>
      </CardContent>
    </Card>
  );
}
