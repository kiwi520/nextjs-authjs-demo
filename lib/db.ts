import * as mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB Connected...");
    } catch (err: any) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;
