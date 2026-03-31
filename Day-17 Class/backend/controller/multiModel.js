const {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} = require("@google/genai");
const fs = require("fs");

const ai = new GoogleGenAI({
  apiKey: process.env.apiKey,
});

const multiModelPrompt = async (req, res) => {
  try {
    // req.file is provided by multer middleware (uploaded image)
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const imagePath = req.file.path;
    const mimeType = req.file.mimetype;

    // Upload the image file to Gemini
    const image = await ai.files.upload({
      file: imagePath,
      config: { mimeType: mimeType },
    });

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        createUserContent([
          req.body.prompt,
          createPartFromUri(image.uri, image.mimeType),
        ]),
      ],
    });

    // Clean up the temp uploaded file
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Error deleting temp file:", err);
    });

    res.status(200).json({ message: response.text });
  } catch (error) {
    console.error("multiModelPrompt error:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

module.exports = multiModelPrompt;