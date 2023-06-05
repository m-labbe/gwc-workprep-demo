const fs = require('fs')
const path = require('path')
const express = require("express");
const router = express.Router();

const userData = fs.readFileSync(path.join(__dirname, '..', 'json', 'users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)

router.get("/users", async (req, res) => {
  res.send(users);
});

router.put("/users/:id", async (req, res) => {
  const x = parseInt(req.params.id);
  if(isNaN(x)) {
    res.status(400).send({"error": "Invalid User ID"});
  }
  // get user by id
  var elementOfArray = users.find(item => item.id === x);

  // update email address
  const newEmail = req.body.email;
  elementOfArray.email = newEmail;

  res.status(200).send(elementOfArray);
})

// res.status(400).send("message": "Updated email address successfully");
module.exports = router;