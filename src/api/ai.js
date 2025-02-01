const express = require("express");
const cors = require("cors");
const ollama = require("ollama").default; // Extract `default` explicitly

async function startAPI() {
    console.log("Starting API...");
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.post("/api/chat", async (req, res) => {
        const userInput = req.body.message;

        try {
            const response = await ollama.chat({
                model: "deepseek-r1:1.5b",
                messages: [{ role: "user", content: userInput }],
            });

            res.json({ reply: response.message.content || "No response" });
        } catch (error) {
            res.status(500).send({ error: "Error interacting with the model" });
        }
    });

    const PORT = 3001;

    app.listen(PORT, () => {
        console.log(`AI API running on http://localhost:${PORT}`);
    });
}

module.exports = { startAPI };
