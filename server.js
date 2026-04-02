const express = require("express");

const app = express();
const router = require("./route");
app.use(express.json());
app.use(router);

app.listen(8000, () => console.log("server running"));
