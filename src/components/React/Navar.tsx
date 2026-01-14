import { useState } from "react";

export const Navar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  console.log(menu);

  return (
    <nav>
      <button onClick={() => setMenu(!menu)} className="cursor-pointer">
        Menu
      </button>
      {menu && (
        <ul className="h-full flex flex-col gap-5">
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              Buscar Tareas
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              Crear Tarea
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              Calendario
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              Tareas Incompletas
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:text-[#3B5140] transition ease duration-200"
              href="#"
            >
              Tareas Copletadas
            </a>
          </li>
        </ul>
      )}

      <div></div>
    </nav>
  );
};
