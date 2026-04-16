import { useTarefas } from "./components/hooks/addTarefas.jsx";

import ListaTarefas from './components/screens/listTasks/listTasks'
import Cabecario from './components/screens/header/header'
import Content from './components/screens/content/content'
import Footer from "./components/screens/footer/footer.jsx";
import './App.css'

function App() {
  const { tarefas, adicionarTarefa, removerTarefa, completaTarefa, novaTarefa, setNovaTarefa, doneTarefas } = useTarefas();
  return (
    <div>
      <Cabecario />
      <Content tarefas={tarefas}/>
      <ListaTarefas 
      adicionarTarefa={adicionarTarefa}
      completaTarefa={completaTarefa}
      removerTarefa={removerTarefa}
      novaTarefa={novaTarefa}
      doneTarefas={doneTarefas}
      setNovaTarefa={setNovaTarefa}
      tarefas={tarefas}
      />
      <Footer/>
    </div>
  )
}

export default App
