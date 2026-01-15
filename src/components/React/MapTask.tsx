import { useState, useEffect } from "react";
import { type Task } from "../../types/Task.ts";

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

        const result: Task[] = await res.json();

        setTasks(result);
      } catch (error) {
        console.error("Error en fetch de tareas:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando tareas...</div>;

  return (
    <article>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.task_id}>
            <h3>{task.task_title}</h3>
            <p>{task.task_description}</p>
            {task.task_completed ? (
              <span>Tarea Completada</span>
            ) : (
              <span>Tarea Incompleta</span>
            )}
            <span>{task.task_created_at.toString()}</span>
          </div>
        ))
      ) : (
        <span>No hay tareas</span>
      )}
    </article>
  );
};
