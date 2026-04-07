const express = require("express");

const app = express();
const router = require("./route");
const { dbConfig } = require("./configs/dbConfig");
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
require("dotenv").config()
app.use(express.json());
app.use(router);
dbConfig()

// console.log(process.env.APP_USER, process.env.APP_PASS);


app.listen(8000, () => console.log("server running"));
