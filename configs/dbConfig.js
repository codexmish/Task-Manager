const mongoose = require("mongoose")
const dbConfig = ()=>{
    console.log("DB_URL from env =", process.env.DB_URL);
    return mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected!'));

}


module.exports = {dbConfig}