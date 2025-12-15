/**
 * Stopwords básicas (podemos expandir depois)
 */
const stopwords = {
  en: [
    "the", "and", "to", "of", "a", "in", "is", "it", "that", "for",
    "on", "with", "as", "this", "are", "was", "but", "be", "at",
    "or", "from", "by", "an", "if", "you", "your"
  ],
  pt: [
    "o", "a", "os", "as", "de", "do", "da", "dos", "das", "e",
    "em", "um", "uma", "para", "com", "não", "na", "no", "por",
    "se", "que", "como", "mais", "mas", "foi", "ser"
  ]
};

/**
 * Processa textos e retorna palavras mais frequentes
 * @param {string[]} texts
 * @param {"en" | "pt"} language
 * @param {number} limit
 */
export function processTexts(texts, language = "en", limit = 10) {
  const wordCount = {};

  texts.forEach(text => {
    if (!text) return;

    const cleanedText = text
      .toLowerCase()
      .replace(/[^a-záàâãéèêíïóôõöúçñ\s]/gi, " ");

    const words = cleanedText.split(/\s+/);

    words.forEach(word => {
      if (
        word.length < 3 ||
        stopwords[language].includes(word)
      ) {
        return;
      }

      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  });

  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word, count]) => ({ word, count }));
}
