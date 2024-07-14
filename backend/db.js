const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.CONNECTION_URL;
console.log(mongoURI);

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToMongo;
