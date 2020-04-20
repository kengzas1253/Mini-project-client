let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


let employeeSchema = mongoose.Schema(
  {
    // define name and type document 
    name: {
      type: String
    },
    surname: {
      type: String
    },
    position: {
        type: String
    },
    telephone: {
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: String
    },
    status: {
      type: String
    }
  },
  {
    // define collection MongoDB 
  }
);


let Employee = mongoose.model("employee", employeeSchema);

// GET all
router.get("/", (req, res) => {
  Employee.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Employee.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  let obj = new Employee(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Employee Create!");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Employee.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update Employee");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Employee.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete Employee");
  });
});
module.exports = router;