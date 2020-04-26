let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


let cancelSchema = mongoose.Schema(
  {
    // define name and type document 
    _name: {
      type: String
    },
    _surname: {
      type: String
    },
    _position: {
        type: String
    },
    _telephone: {
      type: String
    },
    _date: {
      type: String
    },
    _time: {
      type: String
    },
    _detail: {
      type: String
    },
    _status: {
      type: String
    }
  },
  {
    // define collection MongoDB 
    collection: "cancel_job"
  }
);
let Cansel_job = mongoose.model("cancel_job", cancelSchema);

// GET all
router.get("/", (req, res) => {
  Cansel_job.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Cansel_job.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  let obj = new Cansel_job(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Cansel job Create!");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Cansel_job.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update Cansel job");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Cansel_job.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete Cansel job");
  });
});
module.exports = router;