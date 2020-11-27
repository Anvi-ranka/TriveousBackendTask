const {
  createBookmark,
  findAllBookmark,
  updateBookmark,
  deleteBookmark
}= require("../controllers/bookmark.controller");

const express = require('express');    
const router = express.Router();

  //create a bookmark
  router.post("/bookmark",createBookmark);

  //retrive all BookMarks
  router.get("/bookmark", findAllBookmark);

  //update a BookMark
  router.put("/:id",updateBookmark);

  //delete a BookMark
  router.delete("/:id",deleteBookmark);

  module.exports = router;

