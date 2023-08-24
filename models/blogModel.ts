// Declare the Schema of the Mongo model
import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = model("Blog", blogSchema);
