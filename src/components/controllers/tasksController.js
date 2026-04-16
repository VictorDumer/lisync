import { getTasks,addTask,deleteTask,updateTask,getTaskById } from "../services/taskService.js";

export const getResquestBody=(req)=>{
    return new Promise((resolve,reject)=>{
        let body= '';
        
        req.on('data', chunck=>{
            body+= chunck.toString()
        })

        req.on('end', ()=>{
            console.log("corpo requisicao", body)
            try {
                resolve(body? JSON.parse(body):{})
                
            } catch (error) {
                reject(error)
            }
        })
        req.on('error', erro=> reject(erro))
    })
}

export const createTask= async(req,res)=>{
    try {
        
        const body = await getResquestBody(req);
        
        if (!body.title) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ message: "O título é obrigatório" }));
        }
        
        const task = addTask(body.title)
        res.statusCode=201
        res.end(JSON.stringify(task))
    } catch (error) {
        res.statusCode= 400;
        res.end(JSON.stringify({message:'Erro no formato da requisicao', error: error.message}))
    }
}



export const listTasks= (req,res)=>{
    const tasks = getTasks();

    res.statusCode=200;
    res.end(JSON.stringify(tasks))
}

export const listTaskById= (req,res,id)=>{
    const task = getTaskById(id);
    if(!task){
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message:'Id de tarefa não existe'
        }))
    }


    res.statusCode=200;
    res.end(JSON.stringify(task))
}



export const updateTasks= async(req,res,id)=>{
    const body = await getResquestBody(req);
    console.log("Corpo requisicao:", body);

    const {title,completed} = body;
    
    if(title && typeof title !== 'string'){
        res.statusCode = 400;
        return res.end(JSON.stringify({
            message:'O título é obrigatório'
        }))
    }
    
    if(completed!==undefined && typeof completed !== 'boolean'){
        res.statusCode = 400
        return res.end(JSON.stringify({message:' O valor de "completed" deve ser booleano'}))
    }
    
    const task = updateTask(id,title,completed);
    console.log("Tarefa atualizada:", task);
    if(!task){
        res.statusCode=404;
        return res.end(JSON.stringify({
            message: 'Tarefa não encontrada.'
        }));
    };
    res.statusCode = 200;
    res.end(JSON.stringify(task))
}
export const deleteTarefa= (req,res,id)=>{
    const success = deleteTask(id);''

    if(!success){
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message: 'Não encontrada'
        }))
    }
    res.end(JSON.stringify({message: 'Removida'}))
}

