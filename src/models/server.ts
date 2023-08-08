import express, { Application, Request,Response } from 'express';
import cors from 'cors';

import routeVideo from '../routes/video';
import routeFile from '../routes/file';
import routeVideoActress from '../routes/videoActress';
import db from '../db/connections';


class Server {
    private app: Application;
    private port: string;

    constructor() {
       // console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';

        this.listen();
        this.midleware();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriengo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req:Request, res:Response) => {
            res.json({
                msg: 'API working'
            })

        })
        this.app.use('/api/files',routeFile); 
        this.app.use('/api/videos',routeVideo);
        this.app.use('/api/videoActress',routeVideoActress);
    }

    midleware() {
        //parsear body JSON
        this.app.use(express.json());

        //cors
        this.app.use(cors()); 
    }
    
    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada')       
        } catch (error) {
            console.log(error);
            console.log('Error al conectar a la db')

        }
    }
}

export default Server;