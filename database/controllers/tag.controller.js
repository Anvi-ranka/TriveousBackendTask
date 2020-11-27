const Tag = require("../models/tag.model.js");

//create and save a new tag
exports.createTag = (req , res ) => {
  if(!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty"});
    return;
  }

  const tag = new Tag({
    title: req.body.title,
  });
  tag
  .save(tag)
  .then( data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while creating the tag."
    });
  });
};

//retrive all the tags from database
exports.findAllTag = (req, res) => {
  const title = req.body.title;
  var condition = title ? { title: { $regex : new RegExp(title), $options: "i"} } :{};

  Tag.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while retriving the tags."
    });
  });
};

//delete a tags
exports.deleteTag = (req, res) => {
  const id = req.params.id;
  Tag.findByIdAndRemove(id)
  .then(data => {
    if(!data){
      res.status(404).send({
        message : `cannot delete tag with id=${id}. Maybe tag was not found!`
      });
    }else {
      res.send({
        message:"tag was deleted successfully!"
      });
    }
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while deleting the tag."
    });
  });
};
