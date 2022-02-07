const mongoose = require("mongoose");

const database = mongoose.connect("mongodb://localhost:27017/meds",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Database Connected Succesfully");
}).catch((e)=>{
    console.log("Something went wrong i.e ",e)
});

module.exports = database;