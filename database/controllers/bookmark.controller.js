const BookMark = require("../models/bookmark.model.js");

//create and save a new bookmark
exports.createBookmark = (req , res ) => {
  if(!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty"});
    return;
  }

  const bookmark = new BookMark({
    link : req.body.link,
    title: req.body.title,
    publisher: req.body.publisher,
    tag:req.body.tag
  });

  bookmark
  .save(bookmark)
  .then( data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while creating the BookMark."
    });
  });
};

//update a bookmark
exports.updateBookmark = (req , res ) => {
  if(!req.body) {
    res.status(400).send({ message: "Data to update cannot be empty"});
  }
   const id = req.params.id;
   BookMark.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
   .then(data => {
     if(!data) {
       res.status(404).send({
         message:`cannot update bookmark with id=${id}. Maybe bookmark was not found!`
       });
     } else res.send({ message: "BookMark was updated successfully!"});
   })
   .catch(err =>{
     res.status(500).send({
       message:
       err.message || "some error occured while creating the BookMark."
     });
   });
};

//retrive all the bookmarks from database
exports.findAllBookmark = (req, res) => {
  const title = req.body.title;
  var condition = title ? { title: { $regex : new RegExp(title), $options: "i"} } :{};

  BookMark.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while retriving the BookMarks."
    });
  });
};

//delete a bookmark
exports.deleteBookmark = (req, res) => {
  const id = req.params.id;
  BookMark.findByIdAndRemove(id)
  .then(data => {
    if(!data){
      res.status(404).send({
        message : `cannot delete bookmark with id=${id}. Maybe bookmark was not found!`
      });
    }else {
      res.send({
        message:"BookMark was deleted successfully!"
      });
    }
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || "some error occured while deleting the BookMark."
    });
  });
};

