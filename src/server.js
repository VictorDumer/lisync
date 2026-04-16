import http from 'http';
import { taskRoutes } from './components/routes/taskRoutes.js';
const PORT= 3000;
const ADRESS='http://localhost'
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json')

  taskRoutes(req,res);
});

server.listen(PORT, ()=>{
    console.log(`Server rodando em ${ADRESS}:${PORT}`)
})