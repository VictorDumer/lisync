import { getTasks,addTask,deleteTask,updateTask } from "../services/taskService";

export const getResquestBody=(req)=>{
    return new Promise((resolve,reject)=>{
        const body= ''
        
        req.on('data', chunck=>{
            body.concat(chunck.toString())
        })

        req.on('end', ()=>{
            resolve(JSON.parse(body))
        })
    })
}

export const createTask= async(req,res)=>{
    const body = await getResquestBody(req);
    const task = addTask(body.title)
    res.statusCode=201
    res.end(JSON.stringify(task))
}

export const listTasks= (req,res)=>{
    const tasks = getTasks();

    res.statusCode=200;
    res.end(JSON.stringify(task))
}

export const updateTasks= async(req,res,id)=>{
    const body = await getResquestBody(id);

    const task = updateTask(id,body.title);

    if(!task){
        res.statusCode=404;
        return res.send(JSON.stringify({
            message: 'Não encontrada.'
        }));
        res.send(JSON.stringify(task))
    };
}
export const deleteTarefa= (req,res,id)=>{
    const sucess = deleteTask(id);

    if(!sucess){
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message: 'Não encontrada'
        }))
    }
    res.end(JSON.stringify({message: 'Removida'}))
}

