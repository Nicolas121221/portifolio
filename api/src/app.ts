import dotenv from 'dotenv';
import express, {json, urlencoded, type Express} from 'express'
import logger from './config/logger.ts';

export class App{
	private app: Express;
	private port: number

	constructor(port: number = 3000){
		this.port = port;
		this.app = express();
	}

	init():void{
		this.config();
		this.routes();

		this.app.listen(this.port,()=>{
			logger.info(`Server running in Port ${this.port}`)
			logger.info(`http://localhost:${this.port}`)
		})
	}

	routes():void{
		this.app.use('/', (req,res) => res.send({msg:"hello world"}))
	};

	config(){
		this.app.use(urlencoded({extended:true}))
		this.app.use(json())
		dotenv.config();
	}
}

export const app = new App();
