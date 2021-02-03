const express = require ('express');
const router = express.Router();
const List = require('../models/list');

router.route("/").get(function(req, res) {
  console.log("inside get");
  List.find()
    .then(lists =>res.json(lists))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post(function(req, res) {
    console.log("inside post");
    const newList = new List ({
          title: req.body.title,
          content: req.body.content
    });
    newList.save()
      .then(()=> {
        res.json("New List added");
      })
      .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").put(function(req, res) {
  console.log("inside put");
  List.update(
        {_id: req.params.id},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
          if(err)
            res.send(err);
          else
            res.send("Successfully updated the article");
        })
})

router.route("/:id").delete(function(req, res) {
  console.log("inside delete");
    List.findByIdAndDelete(req.params.id)
    .then(function(){res.json("successfully deleted");

    })
    .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;
