import { GoogleGenAI } from "@google/genai";

const API_KEY ="AIzaSyCP-Nab9fZuUg24GbCuzq9zcn2J7gcM0-Y";

if (!API_KEY) {
  console.error("Gemini API key is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `
You are a friendly, professional, and helpful representative for Yuvak Pratishthan...
(keep your full instruction here)
`;

let chat = null;

export const startChat = () => {
  chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: systemInstruction,
    },
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Hello! I am the AI assistant for Yuvak Pratishthan. How can I help you today?",
          },
        ],
      },
    ],
  });
};

export const sendMessageToGemini = async (message) => {
  if (!chat) startChat();

  try {
    const result = await chat.sendMessage([
      {
        role: "user",
        parts: [{ text: message }],
      },
    ]);

    return result.response.text();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
