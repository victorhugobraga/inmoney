import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Account() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap0-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-7xl gap-2 items-start md:grid-cols-[180px_1fr] lg:grid-cols-[1fr_2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>Suas informações de perfil.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/victorhugobraga.png" />
              <AvatarFallback>IM</AvatarFallback>
            </Avatar>
            <div className="space-y-2.5">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold leading-none">
                  Victor Braga
                </h1>
              </div>
              <p className="text-sm text-gray-500">@victorbraga</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Editar</Button>
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
              <Input id="name" placeholder="Digite o seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Digite o seu email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="avatar">Avatar</Label>
              <Input id="avatar" type="file" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
