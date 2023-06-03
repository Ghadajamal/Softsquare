const express= require('express');
const cors = require('cors');

//create an instance of the express application 
const app= express();
//specify port for backend
const PORT = process.env.PORT || 5000;
//we gonna use a lot of environment variables so we can say 
//this will allow us to call the environment variables inside of the node application 
require('dotenv').config();

//------set up our middle wear
//will a allow us to cross origin request
app.use(cors());
//we need to set one more middle wear
//will alow us to pass json from front to backend 
app.use(express.json());
app.use(express.urlencoded());

//---Creating first ROUTE basicall root route
//the call back function is going to receive request and responsense as parameters
app.get('/', (req, res)=> {
    //to make sure the backend is running 
    res.send('Hello GHada')
})

//we need to run the b end in the port 
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));