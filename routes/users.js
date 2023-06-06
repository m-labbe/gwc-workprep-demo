const fs = require('fs')
const path = require('path')
const express = require("express");
const router = express.Router();

const userData = fs.readFileSync(path.join(__dirname, '..', 'json', 'users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)

router.get("/users", async (req, res) => {
  res.send(users);
});

router.get("/users/:id", async (req, res) => 
{
  const userId = parseInt(req.params.id);
  if(isNaN(userId)) 
  {
    res.send({"error": "Specified User not found"});
  }
  const user = users.find(item => item.id === userId);
  res.send(user);
})

module.exports = router;