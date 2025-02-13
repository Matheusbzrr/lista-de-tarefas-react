import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !descricao.trim()) {
            alert("Por favor, preencha todos os campos!");
            return;
          }
          onAddTask(title, descricao);
          setTitle("");
          setDescricao("");
        }}
        className="text-center bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
