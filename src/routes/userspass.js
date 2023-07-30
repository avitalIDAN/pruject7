const express = require("express");
const router = express.Router();
router.use(express.json());
var DB = require("../DB");
var tableName = 'userspass';


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
    // const { error } = Check.check(tableName, req.body);
  
    // if (error) {
    //   console.log(error.details[0].message);
    //   return res.status(400).send(error.details[0].message);
    // }

    DB.post(tableName, req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
        return res.send("Internal Server Error"); //.status(500)
      });
});
  
router.put("/:id", (req, res) => {
    // check body
    // const { error } = Check.check(tableName, req.body);
    // if (error) {
    //   console.log(error.details[0].message);
    //   return res.status(400).send(error.details[0].message);
    // }
  
    DB.put(tableName, req.body)
      .then((result) => {
        console.log(result); // Access the result array here
        return res.send(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors here
      });
  });
  
router.delete("/:id", (req, res) => {
    DB.delete(tableName, req.params.id)
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
