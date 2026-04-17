import { createTaskModel } from "../model/taskModel.js";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const tasks = []
let idCounter=1;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = path.join(__dirname, '../database/db.json')


function checkData(){
    const check = path.dirname(data)
    if (!fs.existsSync(check)) fs.mkdirSync(check, { recursive: true });
    if (!fs.existsSync(data)) fs.writeFileSync(data, '[]', 'utf-8');
}

function loadData(){
    try {
        const dados= fs.readFileSync(data,'utf-8')
        tasks.length=0;
        tasks.push(...JSON.parse(dados));
        idCounter= tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    } catch (error) {
        console.error(error)
        tasks.length=0;
        idCounter=1;
    }
}

function saveData(){
    try {
        fs.writeFileSync(data, JSON.stringify(tasks,null,2), 'utf-8');
    } catch (error) {
        console.error(error)
    }
}

checkData()
loadData()


export const addTask=(title)=>{
    const task = createTaskModel(idCounter++,title)
    tasks.push(task)
    saveData()
    return task
}

export const getTasks= ()=> tasks

export const    getTaskById= (id)=>{
    const task= tasks.find(tarefa=> tarefa.id== Number(id))
    if(!task) return null;

    return task

}

export const updateTask= (id,title,completed)=>{
    const task= tasks.find(tarefa=> tarefa.id==Number(id))
    if(!task) return null;
    
    if(title !== undefined) task.title=title;
    if(completed !== undefined){
        task.completed=completed;
    }
    saveData()
    return task
}

export const deleteTask=(id)=>{
    const index = tasks.findIndex(tarefa=>tarefa.id ==Number(id));
    if(index ===-1) return false

    tasks.splice(index,1);
    saveData();
    return true;
}
