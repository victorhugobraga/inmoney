import { ApiService } from "@/app/api/apiService";
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
import { cookies } from "next/headers";

export default async function Account() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("inmoney_session")!.value;
  const getUserResponse = await ApiService.getUser(token);

  const userResponse = getUserResponse;
  if (userResponse.success && userResponse.data) {
    console.log(userResponse.data);
  } else return <></>;

  const user = userResponse.data;

  // const handleLogin = async ({ email, password }: LoginData) => {
  //   Notiflix.Loading.pulse("Entrando...");
  //   try {
  //     const loginResponse = await ApiService.login(email, password);

  //     if (!loginResponse.success || !loginResponse?.data)
  //       throw new Error(loginResponse.message);

  //     cookies.set("inmoney_session", loginResponse.data.token, {
  //       value: loginResponse.data.token,
  //       expires: loginResponse.data.expiration_date,
  //     });
  //     router.push("/dashboard");
  //   } catch (error: any) {
  //     Notiflix.Report.failure(
  //       "Erro",
  //       error?.message ?? "Ocorreu um erro ao carregar os seus dados.",
  //       "Ok"
  //     );
  //   } finally {
  //     Notiflix.Loading.remove();
  //   }
  // };

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
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold leading-none">{user.name}</h1>
              </div>
              <p className="text-sm text-gray-500">@{user.nick_name}</p>
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
