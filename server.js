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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: `Generate 5 SSC MCQs on ${subject}.
Return ONLY valid JSON.
No markdown.
No explanation.

Format:
[
 { "question": "text", "options": ["A","B","C","D"], "answer": "A" }
]`
          }
        ]
      })
    });

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;

    if (!text) {
      return res.json([
        { question: "Fallback question", options: ["A","B","C","D"], answer: "A" }
      ]);
    }

    const cleaned = text.replace(/```json|```/g, "").trim();

    try {
      const parsed = JSON.parse(cleaned);
      return res.json(parsed);
    } catch (e) {
      console.error("JSON Error:", cleaned);
      return res.json([
        { question: "AI format error", options: ["A","B","C","D"], answer: "A" }
      ]);
    }

  } catch (err) {
    console.error("Server Error:", err);
    return res.json([
      { question: "Server error", options: ["A","B","C","D"], answer: "A" }
    ]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
