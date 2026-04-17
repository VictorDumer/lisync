import http from 'http';
import { taskRoutes } from './components/routes/taskRoutes.js';
import 'dotenv/config.js';

const PORT= process.env.PORT_BACKEND;
const ADRESS= process.env.ADRESS;
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  taskRoutes(req,res);
});

server.listen(PORT, ()=>{
    console.log(`Server rodando em ${ADRESS}${PORT}`)
})