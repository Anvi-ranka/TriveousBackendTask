const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const tagSchema = new Schema(
{
    title: String
  },
  { timestamp: true }
);

module.exports = mongoose.model("Tag",tagSchema);
