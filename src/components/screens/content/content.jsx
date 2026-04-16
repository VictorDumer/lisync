export default function Content({tarefas}){
    
    const dayCounter = new Date().toLocaleDateString('pt-BR');
    return(
        <>
            <main className="textContainer">
                <h1 className="text">MINHAS</h1>
                <h1 className="text"><span className="colorido">TAREFAS =]</span></h1>
                <div className="dayCounter">
                    <div className="containerDayCounter"> <span>{dayCounter}</span></div>
                    <div className="containerDayCounter"> <span>{tarefas.length} pendentes</span></div>    
                </div>
            </main>
        </>
    )
}