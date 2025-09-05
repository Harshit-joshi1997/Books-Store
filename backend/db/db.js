import mongoose from "mongoose";

console.log("📁 Current Working Directory:", process.cwd());
console.log("🔎 Full process.env dump:", process.env); // check what’s actually loaded
console.log("✅ MONGO_URI loaded:", process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`MongoDB connection error: `, error);
    process.exit(1);
  }
};

export default connectDB;
