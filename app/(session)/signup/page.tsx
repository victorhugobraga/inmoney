"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import * as zod from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ApiService } from "@/app/api/apiService";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const subscriptionSchema = zod.object({
  name: zod
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: zod.string().email("Email inválido"),
  password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type SubscriptionData = zod.infer<typeof subscriptionSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const submitOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(handleSubscribe);
    }
  };

  const handleSubscribe = async ({
    name,
    email,
    password,
  }: SubscriptionData) => {
    Notiflix.Loading.pulse("Criando a sua conta...");
    try {
      const apiService = new ApiService();
      const signUpResponse = await apiService.signUp(name, email, password);
      if (!signUpResponse.success) throw new Error(signUpResponse.message);

      router.push("/login");
    } catch (error) {
      Notiflix.Report.failure(
        "Erro",
        "Ocorreu um erro ao carregar os seus dados.",
        "Ok"
      );
    } finally {
      Notiflix.Loading.remove();
    }
  };

  useEffect(() => {
    document.getElementById("name")?.focus();
  }, []);

  return (
    <>
      <div className="grid gap-2 text-center mb-4">
        <h1 className="text-3xl font-bold">Cadastre-se</h1>
        {/* <p className="text-balance text-muted-foreground">
          Informe os dados a seguir para criar a sua conta
        </p> */}
      </div>

      <form onSubmit={handleSubmit(handleSubscribe)} className="grid gap-8">
        <div className="grid gap-2 relative">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            onKeyDown={(e) => submitOnEnter(e)}
            {...register("name")}
          />
          <span className="text-xs absolute right-0 text-muted-foreground">
            {errors.name ? errors.name.message : " "}
          </span>
        </div>
        <div className="grid gap-2 relative">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="nome@email.com"
            onKeyDown={(e) => submitOnEnter(e)}
            {...register("email")}
          />
          <span className="text-xs absolute right-0 text-muted-foreground">
            {errors.email ? errors.email.message : " "}
          </span>
        </div>
        <div className="grid gap-2 relative">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Sua senha"
            onKeyDown={(e) => submitOnEnter(e)}
            {...register("password")}
          />
          <span className="text-xs absolute right-0 text-muted-foreground">
            {errors.password ? errors.password.message : " "}
          </span>
        </div>
        <Button type="submit" className="w-full">
          Criar conta
        </Button>
        {/* <Button variant="outline" className="w-full">
              Entre com GitHub
            </Button> */}
      </form>
      <div className="mt-4 text-center text-sm">
        Já tem uma conta?{" "}
        <Link href="/login" className="underline">
          Entre
        </Link>
      </div>
    </>
  );
}
