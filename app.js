const express = require('express');
const app = express();

//middleware -> response spend 

// app.use((req,res)=>{
//     let {query} = req.query;
//     console.log("query", query);
//     console.log("hi I am middleware");
//     res.send("hi I am middleware response");
// });

/* Basic MiddleWare */
// app.use((req,res,next)=>{
//     console.log("hi, I am 1st middleware");
//     next();  // it is return iske niche kuch nhi likhte 
//     // console.log("this is after next()");  aisa code nhi likhte hai
// });
// app.use((req,res,next)=>{
//     console.log("hi, I am 2nd middleware");
//     next();
// });

/* Loggar middleware */
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();  // human read format
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

app.use("/random",(req,res,next)=>{
    console.log("hi, I am random middleware");
    next();
});



app.get('/', (req, res) => {
    res.send('Hi, I am root ');
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.listen(2006,()=>{
    console.log("server is start on 2006");
});