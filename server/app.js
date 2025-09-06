const express = require("express");
const router = require("./src/routes/api");
const app = new express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

//let URL="mongodb://localhost:27017/ecom4"
// let URI = "mongodb+srv://cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority";//let option={user:'',pass:"",autoIndex:true};
// mongoose.connect(URI,option).then((res)=>{
//     console.log("Database Connected")
// }).catch((err)=>{
//     console.log(err)
// })

const MONGODB_CONNECTION =
  "mongodb+srv://mdfawjulazim:mdfawjulazim123@cluster.szrub.mongodb.net/PreRecordedECommerce";
mongoose
  .connect(MONGODB_CONNECTION, { autoIndex: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

app.use(cookieParser());
app.use(cors('*'));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data: ", "https://mern.ecom.azimemil.xyz"], // Add your domain here
      },
    },
  })
);
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.set("etag", false);
app.use("/api/v1", router);

app.use(express.static("client/dist"));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
