import { Metadata } from "next";

interface SignUpLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Entre | InMoney",
  description:
    "Faça login e acesse sua conta para gerenciar suas finanças com facilidade. Entre para acompanhar seus gastos, visualizar relatórios e manter-se no controle total de suas finanças. Sua jornada para uma vida financeira mais saudável começa aqui. Acesse agora!",
};

export default function LoginLayout({ children }: SignUpLayoutProps) {
  return <div className="mx-auto grid w-[350px] gap-6">{children}</div>;
}
