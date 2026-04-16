import ListaTarefas from './components/listaTarefas'
import Cabecario from './screens/header/header'
import Content from './screens/content/content'
import './App.css'

function App() {
  
  return (
    <div>
      <Cabecario />
      <Content />
      <ListaTarefas />
    </div>
  )
}

export default App
