import { useEffect, useState } from "react";
import {
deleteItemAlert,
  sucessoAlert,
  avisoAlert,
} from "../services/alerts";
import { fetchCreateTask,fetchDeleteTask,fetchTasks,fetchUpdateTask } from "../services/fetch";


export function useTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [doneTarefas,setDoneTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(()=>{
    fetchTasks().then((tasks)=>{
      setTarefas(tasks.filter((task) => !task.completed));
      setDoneTarefas(tasks.filter((task) => task.completed));
    }).catch((err) => console.error("Erro ao buscar tarefas:", err));
  },[])

  async function adicionarTarefa() {
    if (novaTarefa.trim() === "") return await avisoAlert('modificar algo');
    const task = await fetchCreateTask(novaTarefa);
    setTarefas((dados)=>[...dados, task]);
    setNovaTarefa("");
    await sucessoAlert('Adicionado a lista');
  }

  async function removerTarefa(id, check) {
    const alert = await deleteItemAlert();
    if (!alert) return console.error('Ocorreu um erro no alert')
        await fetchDeleteTask(id);
      if(!check){
        setTarefas(tarefas.filter((task) => task.id !== id));
      }else{
        setDoneTarefas(doneTarefas.filter((task) => task.id !== id));
      }
  }
  async function completaTarefa(id){
    const task = tarefas.find((t) => t.id === id);

    if(!task) return;
    const result = await fetchUpdateTask(id, {title: task.title, completed: true})
      
      setDoneTarefas([...doneTarefas, result]);
      setTarefas(tarefas.filter((task) => task.id !== id));
      
      await sucessoAlert("Tarefa completada")
    
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
