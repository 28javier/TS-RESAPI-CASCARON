
import dotenv from 'dotenv';
import Server from './models/server';

// configurar Dotenv
dotenv.config();

// Intancia del server para que se ejecute 
const server = new Server();
server.listen();