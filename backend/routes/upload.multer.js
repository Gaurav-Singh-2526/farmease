// const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/middleware.multer")
// const { uploadFile } = require("../controllers/uplaod.controler")

// router.post("/", upload.single("image"), (req, res) => {
//     if (!req.file) {
//         console.log(" No file uploaded!");
//         return res.status(400).json({ error: "No file uploaded" });
//     }

//     console.log(" Uploaded File Details:", req.file); // Check if this logs
//     console.log(" File saved at:", req.file.path); // Ensure the file path is logged

//     uploadFile(req, res); 
// });


// // router.get("/images", (req, res) => {
// //     const uploadsDir = path.join(__dirname, "../uploads");
  
// //     fs.readdir(uploadsDir, (err, files) => {
// //       if (err) {
// //         return res.status(500).json({ message: "Error reading directory" });
// //       }
  
// //       // Generate URLs for frontend
// //       const imageUrls = files.map(file => `http://localhost:5000/uploads/${file}`);
// //       res.json(imageUrls);
// //     });
// //   });
  
  


// module.exports = router;
const express = require("express");
const router = express.Router();
const upload = require("../middleware/middleware.multer");
const { uploadFile } = require("../controllers/uplaod.controler");

router.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        console.log(" No file uploaded!");
        return res.status(400).json({ error: "No file uploaded" });
    }

    console.log(" Uploaded File Details:", req.file); // Logs file details
    console.log(" File saved at:", req.file.path);   // Logs file path

    uploadFile(req, res); // Call your controller function
});

module.exports = router;

