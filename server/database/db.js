import mongoose from 'mongoose';

// for the field's which is not initialized in modal.
mongoose.set("strictQuery",false);

const connection=(username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-hdnunw0-shard-00-00.macwcvb.mongodb.net:27017,ac-hdnunw0-shard-00-01.macwcvb.mongodb.net:27017,ac-hdnunw0-shard-00-02.macwcvb.mongodb.net:27017/?ssl=true&replicaSet=atlas-8z7x6m-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{    
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DataBase connected succeffully');
    }catch(error){
        console.log('Error while connecting to the database ',error);
    }
}

export default connection;