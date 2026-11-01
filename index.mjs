// const express =require("express");
// const app = express();
// const pool = require("./DB");

// console.log("Database Port:", process.env.DB_PORT);

// app.get("/hello", async (req, res) => {
//     try {
//         const result = await pool.query("SELECT NOW()");
        
//         res.json({
//             message: "Database connected",
//             data: result.rows
//         });

//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             message: "Database error"
//         });
//     }
// });


// app.get( '/', (req , res)=>{
//     res.sendFile("./views/index.html" ,{root: __dirname} );

// } )


// app.get( '/hello' , (req , res)=>{
//     res.send(`this is port = 3000`);
    
// } )

 
// app.listen(3000 , ()=>{
//     console.log("welcom in the node level 1" , 3000);
// })




// const fs = require("fs");
// const { json } = require("stream/consumers");

// const readfile = fs.readFileSync('./hello.text' ,"Utf8") // متزامنه  blocking   بتوقف thread js  كولو لحد لما تخلص وترجع النتيجه  



 //    readfile
// console.log(readfile);

// const ASYNC = fs.readFile('./hello.text' ,"Utf8",(error ,data )=>{

//     if (error) {
        
//         console.log("Finding error in File ");
        
//     }
//     return " Done"

// })


          // writeFile 

// fs.writeFile('./hello.text', JSON.stringify( [{id :1 ,  name: "Hsaam"}] ),"Utf8" ,(err)=>{

//     if (err) {

//         console.log("FInding error");    
        
//     }
//     console.log("Done");

// })


    //  delet file 
  
// fs.unlink('./hello.text' ,(error)=>{  
//     if (error) {
//         console.log('have error');
        
//     }
// })


 //            Stream   read 

//  const rstream =fs.createReadStream('./hello.text', "utf8")
// rstream.on('data' , (chunc)=>{
//     console.log("==========================chunc-======================" , chunc);
// } )


//  write stream 
// const rstream =fs.createReadStream('./hello.text', "utf8")
// rstream.on('data' , (chunc)=>{
//     console.log("==========================chunc-======================" , chunc);
// } )


 //  create cil  command line interface for me 
//1-import commander
//2- descrip  the comand details 



// const {Command} = require("commander")

// import fs from 'node:fs';
// import { Command } from "commander";
// import inquirer from 'inquirer';

// const program = new Command();
// const filepath = './hello.json'

// const question = [
//     {
//         type:"input",
//         name:"Course",
//         message:"pleas Enter The Cource :"
//     },
//      {
//         type:"number",
//         name:"price Cource",
//         message:"pleas Enter Price Cource  :"
//     }
// ]


// program
// .name("add" )
// .description("This commant to add into the corses level_1")
// .version("1.0.0")

// program
// .command("add")
// .alias("a")
// .description("add into  cources")
// .action(()=>{

// inquirer
// .prompt(question)
// .then((ansowr)=>{
//     if(fs.existsSync(filepath))
//     {
//         fs.readFile(filepath,'utf-8' , (error , filecontanc)=>{
//             if (error) {
//                 console.log('Finding Eroor in OPeration');
//                 process.exit();
            
//             }
//             console.log("filecontanc => " , filecontanc );
//             const filecontantcreate = JSON.parse(filecontanc);
            
//             filecontantcreate.push(ansowr);

//         fs.writeFile(filepath , JSON.stringify(filecontantcreate) ,'utf8' , (error)=>{
//             if (error) {
//             console.log("have a error");
            
//             }
//            console.log("Done add");
        
//                })
//         })

//     }else{
//        fs.writeFile(filepath , JSON.stringify([ansowr]) ,'utf8' , (error)=>{
//         if (error) {
//             console.log("have a error");
            
//         }
//         console.log("Done add");
        
//     })
//     }  
// })
// .catch( (error)=>{
    
// } )

// } )

// program
// .command("list")
// .alias("l")
// .action(()=>{

//     fs.readFile(filepath,'utf-8', (error , contact)=>{
//         if (error) {
//             console.log('finding error');
//             process.exit();
//         }
//         console.table(JSON.parse(contact));


//     })

// } )

// program.parse();


//   CREATE  HTTP  SERVER BY  NODE

// import http from 'node:http'

// const server =http.createServer( (req  , res)=>{
//     console.log("the req url" , req.url );
//     res.end("home page")
    
    
// } )

// server.listen(3002 , ()=>{
//     console.log('Done listen');
    
// })


//   CREATE  HTTP  SERVER BY  Express.js 

import express from 'express';
import morgan from 'morgan';


const app = express();

app.use((req,res,next)=>{

    console.log('logger' , req.method , 'this url :' , req.url);
    
next();
}) // this is middle ware

app.use(morgan("dev"))
app.get('/' , (req , res)=>{
    res.send("welcom Home page")
})

// app.get('/css' , (req , res)=>{
//     res.sendFile('./views/index.html' , { root: import.meta.dirname})
// })
app.get('/about' , (req , res)=>{
    res.send([ { 
        id:1,
        name:"moahamed"
    }])
})

app.listen('5000' , ()=>{
    console.log('Done Listen');
    
})