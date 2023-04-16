import mongoose from "mongoose";



const DBConnection = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/file-sharing', {useNewUrlParser : true});
        console.log('Database Connected Successfully');
    } catch(error){
        console.error("Error while connecting with database : ", error.message);
    }
}

export default DBConnection;