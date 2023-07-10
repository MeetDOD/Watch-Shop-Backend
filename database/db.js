const mongoose = require('mongoose');

const connectionDB = async (USER,PASS) => {    
    try{
        await mongoose.connect(process.env.URL);
        console.log('Mongo DB is 💝')
    }catch(er){
        console.log('failed connection',er)
    }
};  

module.exports = connectionDB;