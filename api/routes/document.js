const express = require("express");
const router = express.Router();
const shareMediator = require("../../boundaries/sharebase-mediator");

router.post("/:documentName", (req, res, next) => {
  const name = req.params.documentName;
  res.status(200).json({
    result: shareMediator.createDocument(name, "ElFolder"),
    message: "",
    status: true
  });
});

module.exports = router;
