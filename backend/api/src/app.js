const express = require('express');
require("../src/db/connect")
const router = require('./routers/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`Connection passed successfully at http://localhost:${port}`)
})
