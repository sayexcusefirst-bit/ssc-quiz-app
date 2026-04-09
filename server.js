import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/questions", async (req, res) => {
  const subject = req.query.subject || "history";

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      content: `Generate exactly 5 SSC exam multiple choice questions on ${subject}.

Rules:
- Each question must have 4 options
- Only one correct answer
- Answer must be index number (0,1,2,3)

STRICTLY return ONLY valid JSON.
DO NOT write any text before or after.
DO NOT use markdown.

Example format:
[
  {
    "question": "Who was Akbar?",
    "options": ["King", "Scientist", "Doctor", "Teacher"],
    "answer": 0
  }
]`

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;

    if (!text) {
      return res.json([
        { question: "Fallback question", options: ["A","B","C","D"], answer: 0 }
      ]);
    }

    // clean response
    const cleaned = text.replace(/```json|```/g, "").trim();

    try {
      const parsed = JSON.parse(cleaned);
      return res.json(parsed);
    } catch (err) {
      console.error("Parse error:", cleaned);
      return res.json([
        { question: "Fallback question", options: ["A","B","C","D"], answer: 0 }
      ]);
    }

  } catch (err) {
    console.error("Server error:", err);
    return res.json([
      { question: "Server error", options: ["A","B","C","D"], answer: 0 }
    ]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
