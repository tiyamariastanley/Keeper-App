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

router.route("/:id").delete(function(req, res) {
    console.log("inside delete");
    console.log(req.params.id);
    //console.log(List.find(req.params.id));
    List.findByIdAndDelete(req.params.id)
    .then(function(){res.json("successfully deleted");

    })
    .catch(err => res.status(400).json("Error: " + err));
  //console.log(res);
})

module.exports = router;
