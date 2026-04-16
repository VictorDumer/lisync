import { createTask,deleteTarefa,listTasks,updateTasks,listTaskById } from "../controllers/tasksController.js";

export const taskRoutes=(req,res)=>{
    const url = req.url;
    const method = req.method;

    // GET
    if(url ==='/tasks' && method==='GET'){
        return listTasks(req,res)
    }
    // GET BY ID
    if(url.startsWith('/tasks/') && method === 'GET'){
        const id = url.split('/')[2];
        return listTaskById(req,res,id)
    }
    // POST
    if(url ==='/tasks' && method==='POST'){
        return createTask(req,res)
    }
    
    // PUT
    if(url.startsWith('/tasks/') && method === 'PUT'){
        const id = url.split('/')[2];
        return updateTasks(req,res,id)
    }
    
    // DELETE
    if(url.startsWith('/tasks/') && method === 'DELETE'){
        const id = url.split('/')[2];
        return deleteTarefa(req,res,id)
    }
    
    // NOT FOUND
    
    res.statusCode= 404;
    res.end(JSON.stringify({
        message: 'Rota não encontrada'
    }))
}