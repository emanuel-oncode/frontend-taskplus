import { useState, type ReactNode } from "react";

interface Button {
  // value: boolean;
  task_id: string;
  className?: string;
  children: ReactNode;
}

export const Button = ({ className, children, task_id }: Button) => {
  // const [toggle, setToggle] = useState(value);

  const toggleTask = async () => {
    try {
      const res = await fetch("http://localhost:1234/user/task", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: task_id,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar tarea");
      }

      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error en fetch de tareas:", error);
    }
  };

  return (
    <button
      onClick={toggleTask}
      className={`${className} cursor-pointer border py-2 px-3 rounded-full bg-black text-white`}
    >
      {children}
    </button>
  );
};
