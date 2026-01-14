import { useState } from "react";
import {
  ClipboardList,
  Plus,
  Calendar,
  CheckCircle,
  Search,
  Circle,
  Menu,
  X,
} from "lucide-react";

export const Navar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  console.log(menu);

  return (
    <nav className="relative ">
      <button onClick={() => setMenu(!menu)} className="cursor-pointer">
        {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      {menu && (
        <ul className=" h-dvh p-5 w-xs flex flex-col gap-5 absolute top-11 -right-5 bg-[#47FDB4]">
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              <Search className="w-5 h-5" />
              Buscar Tareas
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              <Plus className="w-5 h-5" />
              Crear Tarea
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              <Calendar className="w-5 h-5" />
              Calendario
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              <CheckCircle className="w-5 h-5" />
              Tareas Copletadas
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              <Circle className="w-5 h-5" />
              Tareas Incompletas
            </a>
          </li>
        </ul>
      )}

      <div></div>
    </nav>
  );
};
