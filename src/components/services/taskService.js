import { createTaskModel } from "../model/taskModel.js";

const tasks = []
let idCounter=1;

export const addTask=(title)=>{
    const task = createTaskModel(idCounter++,title)
    tasks.push(task)
    return task
}

export const getTasks= ()=> tasks

export const getTaskById= (id)=>{
    const task= tasks.find(tarefa=> tarefa.id==id)
    if(!task) return null;

    return task

}

export const updateTask= (id,title,completed)=>{
    const task= tasks.find(tarefa=> tarefa.id==id)
    if(!task) return null;
    
    task.title=title;
    if(completed !== undefined){
        task.completed=completed;
    }
    return task
}

export const deleteTask=(id)=>{
    const index = tasks.findIndex(tarefa=>tarefa.id ==id);
    if(index ===-1) return false

    tasks.splice(index,1);
    return true;
}
