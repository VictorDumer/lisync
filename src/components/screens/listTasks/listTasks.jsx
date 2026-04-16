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
        {tarefas.map((tarefa, indice) => (
          <div key={`pendentes-${indice}`}>
          <li>
            {tarefa}
            <div className="buttons">

            <button onClick={() => completaTarefa(indice)} className="tarefa">
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={() => removerTarefa(indice, false)} className="tarefa delete">
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
        {doneTarefas.map((doneTarefas, indice) => (
          <div key={`concluidas-${indice}`}>
          <li className="done">
            {doneTarefas}
            <button onClick={() => removerTarefa(indice, true)} className="tarefa delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
          </div>
        ))}
      </ul>
    </>
  );
}
