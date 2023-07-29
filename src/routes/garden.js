const express = require("express");
const router = express.Router();
var DB = require("../DB");


router.get("/", (req, res) => {
    DB.get('garden', req.query)
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
    const collection = req.params.collection;
    const { error } = Check.check(collection, req.body);
  
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }

    DB.post('garden', req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Internal Server Error"); //.status(500)
      });
});
  
router.put("/", (req, res) => {
    const collection = req.params.collection;
    // check body
    const { error } = Check.check(collection, req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }
  
    DB.put('garden', req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
      });
  });
  
router.delete("/", (req, res) => {
    DB.delete('garden', req.params.id)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Internal Server Error");
      });
  });


module.exports = router;
