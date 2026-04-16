import { useState } from "react";
import {
  deleteItemAlert,
  sucessoAlert,
  avisoAlert,
} from "../components/alerts";

export function useTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  async function adicionarTarefa() {
    if (novaTarefa.trim() === "") return await avisoAlert('modificar algo');

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
    await sucessoAlert();
  }

  async function removerTarefa(idTarefa) {
    const alert = await deleteItemAlert();
    if (alert) {
      setTarefas(tarefas.filter((_, index) => index !== idTarefa));
    }
  }

  return {
    tarefas,
    novaTarefa,
    setTarefas,
    setNovaTarefa,
    adicionarTarefa,
    removerTarefa,
  };
}
