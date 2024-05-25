import HeaderLanding from "@/components/landing/header";
import Newsletter from "@/components/landing/newsletter";
import "@/styles/landing.scss";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeaderLanding />
      <section className="w-full py-12 lg:py-24 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplifique suas finanças com In
                  <span className="text-green-500">.</span>Money
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Nossa plataforma de finanças pessoais ajuda você a gerenciar
                  seu dinheiro com facilidade, acompanhar seus gastos e alcançar
                  seus objetivos financeiros.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Inscrever-se
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="/manusingphone.jpg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 dark:bg-gradient-to-r from-[#091832] to-[#073229]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Principais Recursos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Gerenciamento de Dinheiro Sem Esforço
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nossa plataforma fornece ferramentas poderosas para ajudá-lo a
                assumir o controle de suas finanças, acompanhar seus gastos e
                alcançar seus objetivos financeiros.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Orçamento</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Crie e gerencie seus orçamentos com facilidade, garantindo
                      que você fique no caminho certo.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Acompanhamento de Despesas
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Acompanhe automaticamente suas despesas e as categorize
                      para obter melhor visibilidade.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Definição de Metas</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Defina metas financeiras e acompanhe seu progresso para
                      alcançá-las.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              alt="Recursos"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/computadorplataforma.jpg"
              width="550"
            />
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
