let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

let mongo_uri = "mongodb+srv://admin:1234@nodejs-cluster-uxklx.mongodb.net/mini-project?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.status(200).send("Rest API MongoDB");
});

// path work collectin MongoDB 
let Work = require("./router/workrouter");
app.use("/api/works", Work);

// path employee collectin MongoDB 
let Employee = require("./router/employeerouter");
app.use("/api/employee", Employee);

// path cancel job collectin MongoDB 
let Cancel_job = require("./router/cancelrouter");
app.use("/api/cancel_job", Cancel_job);

app.use((req, res, next) => {
  let err = new Error("path ");
  err.status = 404;
  next(err);
});

let port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("[success] task 1 : Server is running Port: " + port);
});