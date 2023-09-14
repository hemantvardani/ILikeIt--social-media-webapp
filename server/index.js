import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js'; //or check users

const app =express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);
//start from 18:50

app.get('/',(req,res) =>{

    res.send('APP IS RUNNING.');
})


// const CONNECTION_URL= 'mongodb+srv://userName:password@cluster0.nk1pjwa.mongodb.net/?retryWrites=true&w=majority' ; 
// CONNECTION_URL= mongodb+srv://hemant:hemant123@cluster0.nk1pjwa.mongodb.net/?retryWrites=true&w=majority 

const PORT= process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`))).catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);





//NOTES
//* Express, is a back end web application framework for Node. js
//The ExpressJS API deals with the web application, HTTP requests and responses, routing, and middlewares.

// Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.
//read - https://www.geeksforgeeks.org/working-of-express-js-middleware-and-its-benefits/#:~:text=js%20is%20a%20routing%20and,the%20request%20and%20response%20cycle.






//{useNewUrlParser:true, useUnifiedTopology:true} , it avoid some warnings
// mongoose.connect return promise , .then is executed when promise is fulfilled and catch if promise rejected
//learn about promises more - https://www.geeksforgeeks.org/javascript-promises/
