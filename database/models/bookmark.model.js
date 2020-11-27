const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const bookmarkSchema = new Schema(
  {
  link : String,
  title: String,
  publisher: String,
  tags: [{ type: ObjectId, ref: "Tag", required: true }]
},
{ timestamp: true }
);

module.exports = mongoose.model("BookMark",bookmarkSchema);
