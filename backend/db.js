const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.CONNECTION_URL;
console.log(mongoURI);

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Now we are connected");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = connectToMongo;
