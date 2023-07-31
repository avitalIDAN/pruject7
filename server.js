const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
app.use(cors());


const userRoute = require("./src/routes/users");
const campingRoute = require("./src/routes/camping");
const donationRoute = require("./src/routes/donation");
const electricRoute = require("./src/routes/electric");
const gardenRoute = require("./src/routes/garden");
const handToolsRoute = require("./src/routes/handTools");
const homeToolsRoute = require("./src/routes/homeTools");
const lendingRoute = require("./src/routes/lending");
const potectorToolsRoute = require("./src/routes/potectorTools");
const userspassToolsRoute = require("./src/routes/userspass");


app.use("/users",userRoute);
app.use("/camping",campingRoute);
app.use("/donation",donationRoute);
app.use("/electric",electricRoute);
app.use("/garden",gardenRoute);
app.use("/handTools",handToolsRoute);
app.use("/homeTools",homeToolsRoute);
app.use("/lending",lendingRoute);
app.use("/potectorTools",potectorToolsRoute);
app.use("/userspass",userspassToolsRoute);//Tools

// Serve the static build files from the 'build' directory
// app.use(express.static(path.join(__dirname, 'build')));

// // Define a route to handle all other requests and serve the React app
// app.get('*', (req, res) => {
//      res.sendFile(path.join(__dirname, 'build', 'index.html'));
//    });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});