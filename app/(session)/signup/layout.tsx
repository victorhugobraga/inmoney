import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface SignUpLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Cadastre-se | InMoney",
  description:
    "Crie uma conta e comece a gerenciar suas finanças com facilidade. Registre-se para acompanhar seus gastos, visual.",
};

export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return <div className="mx-auto grid w-[350px] gap-6">{children}</div>;
}
