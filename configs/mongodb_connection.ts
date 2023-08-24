import { connect } from "mongoose";

function dbConnect() {
  try {
    const connection = connect(String(process.env.MONGODB_URL));
    console.log("Database connected asuudalgu");
  } catch (error) {
    console.log("Database error");
  }
}

module.exports = dbConnect();
