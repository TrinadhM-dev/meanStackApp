import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import apiRouter from './routers/apirouter';




const app:express.Application = express();
app.use(cors());
dotenv.config({path:'./.env'});
app.use(express.json());

let hostName:string|undefined = process.env.HOST_NAME;
let portNum:number | undefined = Number(process.env.PORT);
let mongoDBURL:string| undefined = process.env.MONGODB_URL;

//Mongodb Connection
// if(mongoDBURL){
//     mongoose.connect(mongoDBURL).then((response)=>{
//         console.log("connected to Mongodb Successfully...")
//     }).catch((error)=>{
// console.log(`error ${error}`);
// process.exit(1) //stop the node
//     });
// }
//Router Config
app.use('/api/tri3',apiRouter);

//server connection
app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).json({
        text:'Welcome to express Server Started of Emarket by Trinadh'
    })
});

if(portNum!==undefined && hostName!==undefined ){
    app.listen(portNum,hostName,()=>{
        console.log(`Express is running at : http://${hostName}:${portNum}`)
    })
}
