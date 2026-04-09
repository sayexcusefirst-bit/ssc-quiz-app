import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// TEMP TEST ROUTE (NO AI)
app.get("/questions", (req, res) => {
  res.json([
    {
      question: "Who was Akbar?",
      options: ["King", "Scientist", "Doctor", "Teacher"],
      answer: 0
    },
    {
      question: "Capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: 1
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
