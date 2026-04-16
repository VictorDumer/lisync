import { useState } from "react";
import {
  deleteItemAlert,
  sucessoAlert,
  avisoAlert,
} from "../services/alerts";

export function useTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [doneTarefas,setDoneTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  async function adicionarTarefa() {
    if (novaTarefa.trim() === "") return await avisoAlert('modificar algo');

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
    await sucessoAlert('Adicionado a lista');
  }

  async function removerTarefa(idTarefa, check) {
    const alert = await deleteItemAlert();
    if (!alert) return console.error('Ocorreu um erro no alert')
      if(!check){
        setTarefas(tarefas.filter((_, index) => index !== idTarefa));
      }else{
        setDoneTarefas(doneTarefas.filter((_, index) => index !== idTarefa));
      }
    
  }
  async function completaTarefa(idTarefa){
    const tarefaFinalizada = tarefas[idTarefa];

    if(tarefaFinalizada){
      setDoneTarefas([...doneTarefas, tarefaFinalizada]);
      setTarefas(tarefas.filter((_, index) => index !== idTarefa));
      
      await sucessoAlert("Tarefa completada")
    }
  }

  return {
    tarefas,
    doneTarefas,
    novaTarefa,
    setTarefas,
    setNovaTarefa,
    adicionarTarefa,
    removerTarefa,
    completaTarefa
  };
}
