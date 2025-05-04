import mongoose from "mongoose";


const connectDb = async () => {
  try {
    const response = await mongoose.connect("url");
    if (!response) {
      console.log("Database dennied connection");
    } else {
      console.log("Database Connected");
    }
  } catch {
    console.log("Database Connection Failed");
    process.exit(1);
  }
}

export default connectDb;