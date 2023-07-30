const express = require("express");
const router = express.Router();
router.use(express.json());
var DB = require("../DB");
var tableName = 'homeTools';

router.get("/", (req, res) => {
    DB.get(tableName, req.query)
      .then((result) => {
        console.log(result); // Access the result array here
        res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Error");
      });
  });
  
  router.post("/", (req, res) => {
    DB.post(tableName, req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.status(200).json({ message: "Added successfully" });
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Internal Server Error"); //.status(500)
      });
});
  
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    console.log("Received update request for ID:", id);
    console.log("Update data:", updatedData); // Add this line to log the received data

    DB.put(tableName, id, req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.status(200).json({ message: "Updated successfully" });
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
      });
  });
  
router.delete("/:id", (req, res) => {
    DB.delete(tableName, req.params.id)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.status(200).json({ message: "Deleted successfully" });
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Internal Server Error");
      });
  });


module.exports = router;
