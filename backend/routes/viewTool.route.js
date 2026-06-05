const express = require("express");
const { Rental } = require("../model/model");

const router = express.Router();

// Get all tools
router.get("/", async (req, res) => {
    try {
        const tools = await Rental.find();
        res.status(200).json(tools);
    } catch (error) {
        console.error("Error fetching tools:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// GET SINGLE TOOL
router.get("/:id", async (req, res) => {

  try {

    const tools = await Rental.findById(
      req.params.id
    );

    res.json(tools);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

});



module.exports = router;
