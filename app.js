const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

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
// app.use((req,res,next)=>{   // iska matlab hi root path hota quki koi path define nhi kiya
//     req.time = new Date(Date.now()).toString();  // human read format
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

// ye middleware layer hai api ko protect karne ke liye  middleware with error handling
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
   throw new ExpressError(401,"Access Denied")
};

app.get("/api",checkToken,(req, res) => {
    res.send("data");
});


app.use("/random",(req,res,next)=>{
    console.log("hi, I am random middleware");
    next();
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

//activity
app.get("/admin", (req, res) => {
    throw new ExpressError(403,"You are not allowed to access this page");
});

//error handling middleware

// custom error handling middleware
app.use((err,req,res,next)=>{
    let {status=500, message="Something went wrong"} = err;
    res.status(status).send(message);
});

// app.use((err,req,res,next)=>{
//     console.log("------Error2 -----");
//     next(err);  // next() is used to pass the error to the next middleware
    
// });

//404 error handling
// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// });





app.get('/', (req, res) => {
    res.send('Hi, I am root ');
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.listen(2006,()=>{
    console.log("server is start on 2006");
});