const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/newsapp";

const connectToMongo = ()=>{
   mongoose.connect(mongoURI).then(()=>{
    console.log('Now we are connected');
   }).catch((error)=>{console.error(error)});
}

module.exports = connectToMongo;