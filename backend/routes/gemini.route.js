import express from "express";
import dotenv from "dotenv";
dotenv.config();

class GeminiClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://generativelanguage.googleapis.com/v1beta";
  }

async checkCompatibility(partsDescription) {
  // Attach API key as a query parameter, not in Authorization
  const url = `${this.baseURL}/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;

  const prompt = `
You are a PC building expert.
Given the following PC parts, check if they are compatible with each other.

Parts: ${JSON.stringify(partsDescription, null, 2)}

Respond in exactly one line.
If all parts are compatible, say: "All parts are compatible."
Otherwise, list only the incompatible parts in one sentence, say : "The following parts are incompatible: [list of incompatible parts]."
Give 1 line explaination.
`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(data)}`);
    }

    const message =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Unable to determine compatibility.";
    return message;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw error;
  }
}

}

// Initialize Gemini client
const geminiClient = new GeminiClient(process.env.GEMINI_API_KEY);

const router = express.Router();

router.post("/run-flow", async (req, res) => {
  try {
    const { parts } = req.body;

    // Convert array of parts (e.g., { category, title }) into key-value pairs
    const formattedParts = {};
    parts.forEach((part) => {
      formattedParts[part.category] = part.title;
    });

    console.log("Checking compatibility for:", formattedParts);

    // Ask Gemini about compatibility
    const result = await geminiClient.checkCompatibility(formattedParts);

    console.log("Gemini result:", result);
    res.json({ compatibility: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
});

export default router;
