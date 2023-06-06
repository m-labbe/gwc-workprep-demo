const fs = require('fs')
const path = require('path')
const express = require("express");
const router = express.Router();

const userData = fs.readFileSync(path.join(__dirname, '..', 'json', 'users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)

router.get("/users", async (req, res) => {
  res.send(users);
});

const desiredUser = (u, i) => u.id === i;

// remove user
router.delete("/users/:id", async (req,res) =>
{
  var i = req.params.id; 
  var u = users.findIndex(desiredUser, i);
  users.splice(u, 1);
  res.send(users);

})



module.exports = router;