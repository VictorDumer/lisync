export default function ListaTarefas({ tarefas, adicionarTarefa, removerTarefa, completaTarefa, novaTarefa, setNovaTarefa, doneTarefas}) {

  return (
    <>
      <div className="adiciona">
        <input
          type="text"
          value={novaTarefa}
          onChange={(mudanca) => setNovaTarefa(mudanca.target.value)}
          placeholder="> adicionar nova tarefa"
          className="inputTarefa"
        />
        <button onClick={adicionarTarefa} 
        className="adicionaTarefa"
        >
          <span className="colorido"> [ <i class="fa-solid fa-plus"></i> add ]</span>
        </button>
      </div>
      <div className="containerPending">
      <span>Pendentes:</span>
      <div className="line"></div>
      </div>
      <ul>
        {tarefas.map((tarefa) => (
          <div key={`pendentes-${tarefa.id}`}>
          <li>
            {tarefa.title}
            <div className="buttons">

            <button onClick={() => completaTarefa(tarefa.id)} className="tarefa">
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={() => removerTarefa(tarefa.id, false)} className="tarefa delete">
              <i class="fa-solid fa-trash"></i>
            </button>
            </div>
          </li>
          </div>
        ))}
      </ul>
      <div className="containerPending">
        <span>Concluidas:</span>
        <div className="line"></div>
      </div>
        <ul>
        {doneTarefas.map((tarefa) => (
          <div key={`concluidas-${tarefa.id}`}>
          <li className="done">
            {tarefa.title}
            <button onClick={() => removerTarefa(tarefa.id, true)} className="tarefa delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
          </div>
        ))}
      </ul>
    </>
  );
}
