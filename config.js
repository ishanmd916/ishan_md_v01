const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "hiTxSiDKYOX1EbH",
  MONGODB: process.env.MONGODB || "Enter your mongoDB public URL",
  OWNER_NUM: process.env.OWNER_NUM || "94768562916",
};
