import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";
import { getTextsFromReddit } from "./services/redditService.js";
import { processTexts } from "./services/textProcessingService.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("StudyDev API is running 🚀");
});

app.get("/test-reddit", async (req, res) => {
  try {
    const texts = await getTextsFromReddit(["AskReddit"]);
    res.json({ totalTexts: texts.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados do Reddit" });
  }
});

app.get("/test-process", async (req, res) => {
  try {
    const texts = await getTextsFromReddit(["AskReddit"]);
    const result = processTexts(texts, "en", 10);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao processar textos" });
  }
});

app.use("/", analyzeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
