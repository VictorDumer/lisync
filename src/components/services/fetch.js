//TODO: Configurar conexão BFF
const url = import.meta.env.VITE_API_URL;


export async function fetchTasks(){
    const res = await fetch(`${url}/tasks`);
    return res.json()
}


export async function fetchCreateTask(title) {
  const res = await fetch(`${url}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function fetchDeleteTask(id) {
  const res = await fetch(`${url}/tasks/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function fetchUpdateTask(id, data) {
  const res = await fetch(`${url}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}