"use client";
import { ApiService } from "@/app/api/apiService";
import { zodResolver } from "@hookform/resolvers/zod";
import Notiflix from "notiflix";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const newsletterSchema = zod.object({
  email: zod.string().email("E-mail inválido!"),
});

type NewsletterData = zod.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const submitOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(handleNewsletter);
    }
  };

  const handleNewsletter = async ({ email }: NewsletterData) => {
    Notiflix.Loading.pulse("Enviando...");
    try {
      const newsletterResponse = await ApiService.submitNewsletter(email);

      if (!newsletterResponse.success)
        throw new Error(newsletterResponse.message);

      Notiflix.Report.success(
        "Sucesso",
        "E-mail cadastrado com sucesso!",
        "Fechar"
      );
    } catch (error: any) {
      Notiflix.Report.failure(
        "Erro",
        error?.message ?? "Ocorreu um erro ao enviar os seus dados.",
        "Fechar"
      );
    } finally {
      Notiflix.Loading.remove();
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter md:text-5xl/tight">
            Assuma o Controle de Suas Finanças Hoje
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm">
            Inscreva-se em nossa plataforma de finanças pessoais e comece a
            gerenciar seu dinheiro com facilidade.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form
            onSubmit={handleSubmit(handleNewsletter)}
            className="flex space-x-2 flex-wrap relative"
          >
            <Input
              className={`max-w-lg flex-1 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Digite seu email"
              id="email"
              type="email"
              onKeyDown={(e) => submitOnEnter(e)}
              {...register("email")}
            />
            <Button type="submit" className="w-full sm:w-auto">
              Inscrever-se
            </Button>
            {errors.email && errors.email.message && (
              <span className=" text-sm text-red-500 absolute left-0 -bottom-8">
                {errors.email.message}
              </span>
            )}
          </form>
          {/* <p className="text-xs text-gray-500 dark:text-gray-400">
              Ao se inscrever, você concorda com nossos{" "}
              <Link className="underline underline-offset-2" href="#">
                Termos e Condições
              </Link>
            </p> */}
        </div>
      </div>
    </section>
  );
}
