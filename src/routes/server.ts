import express = require("express");
import mongoose from "mongoose";

export class Server {
  constructor() {
    const router = express();
    require("dotenv").config();
    const mongodburl: string = process.env.MONGODB_URL || "mongodb://localhost:27017/coinclass-test";
    console.log({ mn: mongodburl });
    mongoose
      .connect(mongodburl, { retryWrites: true })
      // .connect(process.env.MONGODB_URL!, { retryWrites: true })
      // .connect("mongodb://localhost:27017/coinclass-test", { retryWrites: true })
      .then(() => {
        console.log("connected!!");
      })
      .catch((error) => {
        console.log({
          status: "connection failed!",
          error: error.message,
        });
      });
  }
}
