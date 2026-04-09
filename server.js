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
Return ONLY JSON like:
[
 { "question": "...", "options": ["A","B","C","D"], "answer": "A" }
]`
          }
        ]
      })
    });

    const data = await response.json();
    const text = data.choices[0].message.content;

    res.json(JSON.parse(text));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

app.listen(3000, () => console.log("Server running"));
