import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/api/sandbox/health", (req, res) => {
  res.status(200).json({
    message: "sandbox API is healthy",
    status: "Ok",
  });
});

export default app;
