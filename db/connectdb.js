import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) =>{
    try{
        const DB_OPTIONS = {
            dbName : 'practiceDB'
        }

        await mongoose.connect(DATABASE_URL , DB_OPTIONS).then(console.log(`DB Connect Successfully...`));

    }catch(err){
        console.log(err);
    }
}

export default connectDB ;