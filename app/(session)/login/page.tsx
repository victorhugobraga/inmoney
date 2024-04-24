"use client";
import Link from "next/link";

import { ApiService } from "@/app/api/apiService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Notiflix from "notiflix";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const loginSchema = zod.object({
  email: zod.string().email("Email inválido"),
  password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginData = zod.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async ({ email, password }: LoginData) => {
    Notiflix.Loading.pulse("Entrando...");
    try {
      const loginResponse = await ApiService.login(email, password);

      if (!loginResponse.success) throw new Error(loginResponse.message);
      if (loginResponse)
        Notiflix.Report.success(
          "Sucesso",
          "Você entrou na sua conta.",
          "Ok",
          () => {
            window.location.href = "/";
          }
        );
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
    document.getElementById("email")?.focus();
  }, []);

  return (
    <>
      <div className="grid gap-2 text-center mb-4">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Digite o seu email para entrar na sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit(handleLogin)} className="grid gap-8">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="nome@email.com"
            required
            {...register("email")}
          />
        </div>
        <div className="grid gap-2 relative">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-xs underline"
                >
                  Esqueceu sua senha?
                </Link> */}
          </div>
          <Input
            id="password"
            type="password"
            required
            {...register("password")}
          />
          <span className="text-xs absolute right-0 text-muted-foreground">
            {errors.password ? errors.password.message : " "}
          </span>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
      </form>
      <div className="mt-4 text-center text-sm">
        Não tem uma conta?{" "}
        <Link href="/signup" className="underline">
          Cadastre-se
        </Link>
      </div>
    </>
  );
}
