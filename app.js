const express=require('express');
const storage = require('node-persist');
const cors = require('cors');    //Cross Origin Resource Sharing
storage.init(); //initialize storage
const UserController = require('./routes/userRoutes');
const app=express();

//in-built middleware to parse user data
app.use(express.json()) //JSON Parser. Already available under express

app.use(cors()) //3rd party middleware to handle req from frontend

app.use('/api/v1/user',UserController)

app.listen(5000,()=>console.log('App is running on Port 5000'))

// access user API, user the below path
//http://localhost:5000/api/v1/user (get and post methods)
//http://localhost:5000/api/v1/user/anyid (delete and put methods)