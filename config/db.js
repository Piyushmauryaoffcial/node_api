import mongoose from 'mongoose';
import dotenv from 'dotenv';

// mongo db connection

export const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo DB connected successfully ${mongoose.connection.host}`);
    }catch (error) {
        console.log("Error while connecting to mongo DB", error.message);
    }

}