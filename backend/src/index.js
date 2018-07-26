import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";
import session from "express-session";
import path from "path";

import api from "./api";

const app = express();
const port = 4000;

app.use(function(err, req, res, next) {
  console.error(err.stack);
  return res.status(500).json({ code: 0 });
});

app.use(bodyParser.json());
app.use(compression());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.set("debug", true);
mongoose.connect(
  "mongodb://localhost:27017/theseed",
  { useNewUrlParser: true },
  (err, db) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\x1b[35m", "Connected to mongodb server");
    }
  }
);
const mongoStore = connectMongo(session);

app.use(
  session({
    secret: "fjso@jfjmx.3u0s.jfj2",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 365 * (24 * 60 * 60 * 1000)
    },
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 365 * (24 * 60 * 60 * 1000)
    })
  })
);

app.use("/api", api);

app.use(express.static(path.resolve(__dirname, "..", "frontend")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "index.html"));
});

app.listen(port, () => {
  console.log("\x1b[35m", "Api server is running at", port);
});

if (process.env.NODE_ENV !== "development") {
  const redirectApp = express();
  redirectApp.use((req, res) => {
    if (req.method === "GET") {
      res.redirect("https://" + req.headers.host + req.originalUrl);
    } else {
      res.status(403).send("please use HTTPS");
    }
  });
  redirectApp.listen(5000, () => {
    console.log("", "Redirect server running on port 5000");
  });
}
