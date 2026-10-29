const express =require("express");
const app = express();
const port = 3000;

app.get( '/', (req , res)=>{
    res.sendFile("./views/index.html" ,{root: __dirname} );
    
} )


app.get( '/hello' , (req , res)=>{
    res.send("hello Hosaam in my page ");
    
} )


app.listen(port , ()=>{
    console.log("welcom in the node level 1" , port);
})
