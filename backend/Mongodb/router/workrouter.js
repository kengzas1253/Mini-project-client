let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


let workSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    job: {
      type: String
    },
    day: {
      type: String
    },
    times: {
      type: String
    },
    positions: {
      type: Number
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "works"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "Works"
let Work = mongoose.model("works", workSchema);

// GET all
router.get("/", (req, res) => {
  Work.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Work.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  let obj = new Work(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Work Create!");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Work.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update Work");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Work.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete work");
  });
});
module.exports = router;