const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = 4000;

const userRoute = require("./routes/users");
const campingRoute = require("./routes/camping");
const donationRoute = require("./routes/donation");
const electricRoute = require("./routes/electric");
const gardenRoute = require("./routes/garden");
const handToolsRoute = require("./routes/handTools");
const homeToolsRoute = require("./routes/homeTools");
const lendingRoute = require("./routes/lending");
const potectorToolsRoute = require("./routes/potectorTools");
const userspassToolsRoute = require("./routes/userspass");


app.use("/users",userRoute);
app.use("/camping",campingRoute);
app.use("/donation",donationRoute);
app.use("/electric",electricRoute);
app.use("/garden",gardenRoute);
app.use("/handTools",handToolsRoute);
app.use("/homeTools",homeToolsRoute);
app.use("/lending",lendingRoute);
app.use("/potectorTools",potectorToolsRoute);
app.use("/userspassTools",userspassToolsRoute);


app.listen(PORT, () =>{
     console.log("Server running")
});