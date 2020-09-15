module.exports = (db, contentDir) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
   router.get('/hello', async (req, res) => {
    res.json({msg: "Hello, world!"});
  });

  return router;
}
