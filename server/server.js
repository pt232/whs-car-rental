if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const carRouter = require("./routes/car.routes");
const stationRouter = require("./routes/station.routes");
const authenticateRouter = require("./routes/auth.routes");
const reservationRouter = require("./routes/reservation.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1/car", carRouter);
app.use("/api/v1/station", stationRouter);
app.use("/api/v1/", authenticateRouter);
app.use("/api/v1/reservation", reservationRouter);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} 🚀`
  );
});
