import express from "express";
import { getTextsFromReddit } from "../services/redditService.js";
import { processTexts } from "../services/textProcessingService.js";

const router = express.Router();

router.get("/analyze", async (req, res) => {
  try {
    const { country } = req.query;

    let subreddits;
    let language;

    if (country === "usa") {
      subreddits = ["AskReddit", "CasualConversation", "NoStupidQuestions"];
      language = "en";
    } else if (country === "brazil") {
      subreddits = ["brasil", "conversas", "desabafos"];
      language = "pt";
    } else {
      return res.status(400).json({
        error: "Parâmetro 'country' inválido. Use 'usa' ou 'brazil'."
      });
    }

    const texts = await getTextsFromReddit(subreddits);
    const topWords = processTexts(texts, language, 10);

    res.json({
      country,
      language,
      totalTexts: texts.length,
      topWords
    });
  } catch (error) {
    console.error("Analyze error:", error);
    res.status(500).json({
      error: "Erro interno ao analisar textos"
    });
  }
});

export default router;
