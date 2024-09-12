import mongoose from "mongoose";

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  // Only connect if not already connected
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });
    
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
