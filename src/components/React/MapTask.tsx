import { useState, useEffect } from "react";
import { type Task } from "../../types/Task.ts";
import { CircleAlert, CircleCheck, Trash2 } from "lucide-react";
import { Button } from "./Button.tsx";

export const MapTask = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:1234/user/task", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          setMessage("Deve iniciar secion!");
          throw new Error("Error al obtener tareas");
        }
        const result = await res.json();

        const data: Task[] = result.tasks;

        if (data.length === 0) {
          setMessage("No hay tareas aun");
        }

        setTasks(data);
      } catch (error) {
        console.error("Error en fetch de tareas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTask = async (taskId: string) => {
    try {
      const res = await fetch("http://localhost:1234/user/task", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: taskId,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar tarea");
      }

      setTasks((prev) =>
        prev.map((task) =>
          task.task_id === taskId
            ? { ...task, task_completed: !task.task_completed }
            : task,
        ),
      );
    } catch (error) {
      console.error("Error en fetch de tareas:", error);
    }
  };

  const delatedTask = async (taskId: string) => {
    try {
      const res = await fetch("http://localhost:1234/user/task", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: taskId,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar tarea");
      }

      setTasks((prev) => prev.filter((task) => task.task_id !== taskId));
    } catch (error) {}
  };

  if (loading) return <div>Cargando tareas...</div>;

  return (
    <div className="">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <article
            className="bg-gray-300 p-2 my-2 flex flex-col gap-2 items-start relative"
            key={task.task_id}
          >
            <h3 className="text-xl font-bold">{task.task_title}</h3>
            <p>{task.task_description}</p>

            <div className="flex flex-row flex-wrap justify-between items-center gap-2">
              {task.task_completed ? (
                <Button
                  toggel={() => toggleTask(task.task_id)}
                  className="flex items-center gap-2 border py-2 px-3 rounded-full bg-black text-white"
                >
                  <CircleCheck className="text-green-600 " /> Tarea Completada
                </Button>
              ) : (
                <Button
                  toggel={() => toggleTask(task.task_id)}
                  className="flex items-center gap-2 border py-2 px-3 rounded-full bg-black text-white"
                >
                  <CircleAlert className="text-red-600 " /> Tarea Incompleta
                </Button>
              )}
              <span>{new Date(task.task_created_at).toLocaleString()}</span>
            </div>
            <Button
              toggel={() => delatedTask(task.task_id)}
              className="flex items-center bg-none p-0 absolute top-2 right-2"
            >
              <Trash2 />
            </Button>
          </article>
        ))
      ) : (
        <span>{message}</span>
      )}
    </div>
  );
};
