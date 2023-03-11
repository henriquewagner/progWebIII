import { Database } from './database';
import express from 'express';
import { randomUUID } from 'node:crypto';




const server = express()

const port = 3333

server.use(express.json());

const database = new Database();

server.get("/", (request, response ) => {
    //response.send('Hello World - FEMA') 
    response.json(database.select("user"))

    
});

server.listen(port, () => {
    console.log(`Server Running - end: http://localhost:${port}👌`);
});


//Parâmetro que esta vindo do CLIENTE - Request
//Parâmetro que esta indo para o CLIENTE - Response

server.post('/' , (request, response) => {
    const { name, email } = request.body

    const user = {
        id: randomUUID,
        name,
        email,
    };

    database.insert('user', user);

    response.status(201).send(name);

});