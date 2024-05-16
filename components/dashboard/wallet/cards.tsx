import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowDownSquare, ArrowUpSquare, Repeat } from "lucide-react";

export default function Cards() {
  return (
    <Card className="sm:block hidden">
      <CardHeader>
        <CardTitle>Cartões</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-3 gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <ArrowUpSquare className="w-5 h-5 mr-2" />
              Receita
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <ArrowDownSquare className="w-5 h-5 mr-2" />
              Despesa
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Button variant="outline">
          <Repeat className="w-5 h-5 mr-2" />
          Transferência
        </Button>
      </CardContent>
    </Card>
  );
}
