import { useState, useEffect } from "react";
import { type Task } from "../../types/Task.ts";
import { CircleAlert, CircleCheck } from "lucide-react";
import { Button } from "./Button.tsx";

export const MapTask = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      try {
        const res = await fetch("http://localhost:1234/user/task", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Error al obtener tareas");
        }
        const result = await res.json();

        const data: Task[] = result.tasks;

        setTasks(data);
      } catch (error) {
        console.error("Error en fetch de tareas:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando tareas...</div>;

  return (
    <article className="">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <article
            className="bg-gray-300 p-2 my-2 flex flex-col gap-2 items-start"
            key={task.task_id}
          >
            <h3 className="text-xl font-bold">{task.task_title}</h3>
            <p>{task.task_description}</p>
            {task.task_completed ? (
              <Button
                task_id={task.task_id}
                className="flex items-center gap-2"
              >
                <CircleCheck className="text-green-600" /> Tarea Completada
              </Button>
            ) : (
              <Button
                task_id={task.task_id}
                className="flex items-center gap-2"
              >
                <CircleAlert className="text-red-600" /> Tarea Incompleta
              </Button>
            )}
            <span>{task.task_created_at.toString()}</span>
          </article>
        ))
      ) : (
        <span>No hay tareas</span>
      )}
    </article>
  );
};
