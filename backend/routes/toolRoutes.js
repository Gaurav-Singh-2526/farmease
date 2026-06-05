const express = require("express");

const router = express.Router();

const Tool = require("../models/Tool");


// GET ALL TOOLS
router.get("/all-tools", async (req, res) => {

  try {

    const tools = await Tool.find();

    res.json(tools);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

});


// GET SINGLE TOOL
router.get("/tool/:id", async (req, res) => {

  try {

    const tool = await Tool.findById(
      req.params.id
    );

    res.json(tool);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

});


module.exports = router;