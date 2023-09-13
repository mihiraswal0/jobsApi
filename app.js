require('dotenv').config();
require('./db/connect.js');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const errorHandler=require('./middleware/errorHandler.js');
const notFound=require('./middleware/notFound.js');
const tasks=require('./routes/tasks.js');
const port=process.env.PORT ||5000;


app.use(bodyParser.json());


app.use('/api/v1/products',tasks);

app.use(errorHandler);
app.use(notFound);
app.listen(port,()=>{
    console.log('listening on port'+port);
})