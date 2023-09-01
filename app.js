require('dotenv').config();
const expess=require('express');
const app=express();
const bodyParser=require('body-parser');
const errorHandler=require('./middleware/errorHandler.js');
const notFound=require('./middleware/notFound.js');
const port=process.env.PORT ||5000;


app.use(bodyParser.json());

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log('listening on port'+port);
})