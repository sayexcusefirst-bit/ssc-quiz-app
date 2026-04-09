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
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: `Generate 5 SSC MCQs on ${subject}.
Return ONLY JSON like:
[
 { "question": "...", "options": ["A","B","C","D"], "answer": 0 }
]`
          }
        ]
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
