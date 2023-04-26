const mongoose = require("mongoose");
// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: { type: Boolean, default: false },
});
let User = mongoose.model("User", userSchema);
module.exports = User;





