import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// MongoDB URI with database name (replace 'myDatabase' with your database name)
const uri = process.env.MONGO_URI || 'mongodb+srv://aryannayak9131:AhGzJJtziaZKPCYo@cluster0.luuffqt.mongodb.net/EVStationLocator?retryWrites=true&w=majority';

// Mongoose connection function
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

connectToMongoDB();
