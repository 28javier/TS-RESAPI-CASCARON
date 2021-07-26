import express, {Application} from 'express';
import UserRoutes from '../routes/usuarios.routes';
import cors from "cors";

class Server {
    private app:Application;
    private port: string | number ;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';

    //Middlewares
    this.middlewares();
    //definir rutas
    this.routes();
    }

    //TODO: Conectar base de Datos

    //Middlewares
    middlewares(){
        // cors
        this.app.use(cors());
        // parseo del body
        this.app.use(express.json());
        //carpeta public
        this.app.use(express.static('src/public'));
    }

    // Rutas 
    routes(){
        this.app.use(this.apiPaths.usuarios, UserRoutes);
    }

    // Escuha y levanta el servidor
    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Server run on Port ${this.port}`);
        });
    }
}

export default Server;