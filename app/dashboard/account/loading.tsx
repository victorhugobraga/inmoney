import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AccountLoading() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap0-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-7xl gap-2 items-start md:grid-cols-[180px_1fr] lg:grid-cols-[1fr_2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>Suas informações de perfil.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 items-center">
            <div className="rounded-full bg-slate-700 h-20 w-20 animate-pulse"></div>
            <div className="space-y-2.5 flex-[2]">
              <div className="flex items-center space-x-2 animate-pulse w-full">
                <h1 className="w-full bg-slate-300 dark:bg-slate-700 h-4 rounded"></h1>
              </div>
              <p className="bg-slate-300 dark:bg-slate-700 h-2 rounded-xs w-20 animate-pulse"></p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" disabled>
              Editar
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Editar Perfil</CardTitle>
            <CardDescription>
              Atualização de informações de seu perfil.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <div className="w-full bg-slate-300 dark:bg-slate-700 h-8 rounded animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="w-full bg-slate-300 dark:bg-slate-700 h-8 rounded animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="avatar">Avatar</Label>
              <div className="w-full bg-slate-300 dark:bg-slate-700 h-8 rounded animate-pulse"></div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" disabled>
              Salvar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
