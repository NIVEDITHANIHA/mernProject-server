
/* import MAngoose  */
const mongoose = require("mongoose")

const connectionString = process.env.ophizdb

mongoose.connect(connectionString).then((res)=>{
    console.log("Mangoose connected successfully ophizdb");
}).catch((err)=>{
    console.log(`mangoose failedd to connnect due to  an ${err} ophizdb`);

})