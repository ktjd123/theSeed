import express from "express";
import morgan from "morgan";
import cors from "cors";
// import session from "express-session";
import mongoose from "mongoose";
// import MongoStore from "connect-mongo";
import next from "next";

import api from "./routes";

const server = express();

const dev = process.env.NODE_ENV === "development";
const app = next({ dev });
app.prepare().then(() => {
  server.use(express.urlencoded({ extended: true, limit: "10mb" }));
  server.use(express.json({ limit: "10mb" }));

  if (dev) {
    server.use(morgan("dev"));
  } else {
    const whiteList = ["https://dekina.com"];
    cors({ origin: whiteList });
  }

  mongoose.Promise = global.Promise;

  server.use("/api", api);

  server.get("*", (req, res) => {
    const handler = app.getRequestHandler();
    handler(req, res);
  });

  // eslint-disable-next-line no-unused-vars
  server.use((err: any, req: any, res: any, _: any) => {
    const errMsg = String(err.message);
    if (errMsg && errMsg.includes("CORS")) {
      // console.error(`CORS ERROR ${req.origin}`);
    } else {
      console.error(err.stack);
    }
    return res.status(500).json({ code: 0 });
  });

  const PORT = dev ? 80 : 3000;
  server.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
});
