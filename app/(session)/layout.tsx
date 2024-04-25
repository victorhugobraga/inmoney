import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const cookiesStore = cookies();

  if (cookiesStore.get("inmoney_session")) {
    redirect("/dashboard");
  }

  return (
    <main className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">{children}</div>

      <div className="hidden bg-muted lg:block">
        <Image
          src="/userpage.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-[100vh] object-cover w-full"
          priority
        />
      </div>
    </main>
  );
}
