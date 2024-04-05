import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="h-full">
        <AiFillHome />
        <MdOutlineLightbulb />
        <FaWallet />
        <IoSettingsSharp />
      </aside>

      <div>
        <header></header>

        <main>{children}</main>

        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}
