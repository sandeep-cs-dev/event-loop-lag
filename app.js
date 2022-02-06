
const {generatePrimes} =require('./generate-primes.js');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/test',(req,res)=>{
 const MIN = 2;
 const MAX = 1e5; 
 console.time("total-execution-time");
 generatePrimes(MIN,MAX); 
 res.status(200).send({msg:"ok"});
 console.timeEnd("total-execution-time");
});

const PORT = 3000
server.listen(PORT,()=>{
 console.log(`sever is linstenig on PORT: ${PORT}`)
})

