import { createTask } from "../model/taskModel"

const tasks = []
let idCounter=1;

export const addTask=(title)=>{
    const task = createTask(idCounter++,title)
    tasks.push(task)
    return task
}

export const getTasks= ()=> tasks

export const updateTask= (id,title,completed)=>{
    const task= task.find(tarefa=> tarefa.id==id)
    if(!task) return null;

    if(!completed){
        task.title=title;
        return;
    }
    task.title=title;
    task.completed=completed;
}

export const deleteTask=(id)=>{
    const index = tasks.findIndex(tarefa=>tarefa.id ==id);
    if(index ===-1) return false

    tasks.splice(index,1);
    return true;
}
