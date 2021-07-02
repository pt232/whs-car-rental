require("dotenv").config();

const express = require("express");
const cors = require("cors");
const carRouter = require("./routes/car.routes");
const stationRouter = require("./routes/station.routes");
const authenticateRouter = require("./routes/auth.routes");
const reservationRouter = require("./routes/reservation.routes");
const documentRouter = require("./routes/documents.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);

app.use("/api/v1/car", carRouter);
app.use("/api/v1/station", stationRouter);
app.use("/api/v1/", authenticateRouter);
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/document", documentRouter);

app.get("/", (req, res) => {
  res.send("Welcome to this car rental API! 😎");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
