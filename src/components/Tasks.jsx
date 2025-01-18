import { Squircle, CheckCheck, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("descricao", tasks.descricao);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-5 bg-slate-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left flex items-center gap-2 text-white p-1 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {!task.isCompleted ? <Squircle /> : <CheckCheck />}

            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
