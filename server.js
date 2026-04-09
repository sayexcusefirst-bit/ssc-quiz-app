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
        content: `Generate 5 SSC MCQs on ${subject}.
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT add explanation.

Format strictly:
[
 { "question": "text", "options": ["A","B","C","D"], "answer": "A" }
]`
          }
        ]
      })
    });

    const data = await response.json();
    const text = data.choices[0].message.content;

    try {
  const cleaned = text.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);
  res.json(parsed);
} catch (e) {
  console.error("JSON Parse Error:", text);
  res.status(500).json({ error: "Invalid JSON from AI", raw: text });
}
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
