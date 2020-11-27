const {
    createTag,
    findAllTag,
    deleteTag
} = require("../controllers/tag.controller.js");
const express = require('express')      
const router = express.Router()

    //create a tag
    router.post("/tags", createTag);
  
    //retrive all tags
    router.get("/tags", findAllTag);
  
    //delete all tags
    router.delete("/tags/:id", deleteTag);

module.exports = router;
  