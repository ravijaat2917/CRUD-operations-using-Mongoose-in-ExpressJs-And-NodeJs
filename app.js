import express from 'express';
import { join } from 'path';
import ejsLint from 'ejs-lint';
import web from './routes/web.js';
import dbConnection from './db/connectdb.js';

const app = express();
const port  = process.env.port || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017" ;

// middleware for getting the form data
app.use(express.urlencoded({extended:true}));

// Set ejs engine as view engine
app.set('view engine' , 'ejs');
ejsLint('text',"async: true");

// DataBase Connection
dbConnection(DATABASE_URL);

// Static files
app.use(express.static(join(process.cwd(),'public')));

// Use web routers
app.use('/student' , web);

app.listen(port , ()=>{
    console.log(`Server listening on Port http://localhost:${port}`);
});