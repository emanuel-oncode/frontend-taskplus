import { useState } from "react";
import { LayoutDashboard, ListTodo, Wallet } from "lucide-react";

export const Navar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  console.log(menu);

  return (
    <nav className="flex items-center justify-around w-full p-2">
      <a href="#">
        <LayoutDashboard />
      </a>
      <a href="#">
        <ListTodo />
      </a>
      <a href="#">
        <Wallet />
      </a>
    </nav>
  );
};
