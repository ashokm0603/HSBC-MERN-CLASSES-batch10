const { GoogleGenAI,ThinkingLevel  } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.apiKey,
});

const prompt = async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: req.body.prompt,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH,
        },
      },
    });

    res.status(200).json({ response: response.text });
  } catch (error) {
    res.status(500).json({ message: "failed to respond AI Model" });
  }
};

module.exports = prompt;
