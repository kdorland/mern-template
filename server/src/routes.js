module.exports = () => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/hello', async (req, res) => {
    res.json({msg: "Hello, world!"});
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({msg: `Hello, ${req.params.name}`});
  });

  return router;
}
