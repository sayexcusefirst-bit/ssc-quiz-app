import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// TEMP TEST ROUTE (NO AI)
import fetch from "node-fetch";

app.get("/questions", async (req, res) => {
  const subject = req.query.subject || "history";

  try {
   const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
 model: "llama-3.1-70b-versatile",
    messages: [
      {
        role: "user",
        content: `Give 3 simple SSC questions on ${subject} in JSON.

Return ONLY this format:
[
  {
    "question": "text",
    "options": ["A","B","C","D"],
    "answer": 0
  }
]`
      }
    ],
    temperature: 0.7
  })
});

    const data = await response.json();
    console.log("FULL AI RESPONSE:", JSON.stringify(data));
    const text = data?.choices?.[0]?.message?.content;

    if (!text) throw new Error("No AI response");

    const cleaned = text.replace(/```json|```/g, "").trim();

    try {
      const parsed = JSON.parse(cleaned);
      return res.json(parsed);
    } catch {
      return res.json([
        {
          question: "Fallback: Who was Akbar?",
          options: ["King", "Scientist", "Doctor", "Teacher"],
          answer: 0
        }
      ]);
    }

  } catch (err) {
    console.error(err);
    return res.json([
      {
        question: "Server fallback question",
        options: ["A", "B", "C", "D"],
        answer: 0
      }
    ]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
