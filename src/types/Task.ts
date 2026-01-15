// task_id CHAR(32) PRIMARY KEY,
// task_title VARCHAR(200) NOT NULL,
// task_description TEXT,
// task_completed BOOLEAN DEFAULT FALSE,
// task_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
export type Task = {
  task_id: string;
  task_title: string;
  task_description: string;
  task_completed: boolean;
  task_created_at: Date;
};
