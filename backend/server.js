// const orderRoutes = require("./routes/razorpay.js");
const express = require("express");
const fs = require("fs"); 
const path = require("path"); 
const dbconnection = require("./db");
const app = express();
const PORT = 3004 ;
// dbconnection();

app.use(express.json());
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));  


app.use("/uploads", express.static("uploads"));



app.get("/", (req, res) => {
  res.send("Hello, buddy!");
});


app.get("/api/upload/images", (req, res) => {
  const directoryPath = path.join(__dirname, "uploads");

  fs.readdir(directoryPath, (err, files) => {
      if (err) {
          return res.status(500).json({ message: "Unable to scan files" });
      }

     
      const imageUrls = files.map(file => `http://localhost:${PORT}/uploads/${file}`);
      res.json(imageUrls);
  });
});


app.use(express.urlencoded({ extended: true }));


const Router = require("./routes/AuthRoute.js");

const imageRouter = require("./routes/upload.multer.js");
const viewToolsRouter = require("./routes/viewTool.route.js");
const orderRoutes = require("./routes/orderRoutes.js");




app.use("/api/tools", viewToolsRouter);
app.use("/auth", Router);
app.use("/api/upload", imageRouter);
app.use("/api/orders", orderRoutes);








app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}/`);
}).on("error", (err) => {
  console.error(" Server Error:", err.message);
});



