import { GoogleGenerativeAI } from "@google/generative-ai";

// api key dari folder env
const apiKey = import.meta.env.VITE_API_KEY;
const geniAi = new GoogleGenerativeAI(apiKey);
const model = geniAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a nizzar kheneddy a student who is learning how to code.",
  tools: [
    {
      codeExecution: {},
    },
  ],
});
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
  tools: [
    {
      codeExecution: {},
    },
  ],
});

// dia nerina parameters input buat nanmpung state input yg ada di form
//tapi gada history percakapanya
export const generativeContent = async (input) => {
  try {
    const result = await model.generateContent(input);
    const response = result.response;
    // console.log("Response:", response.text());
    return response.text();
  } catch (error) {
    console.error("Error:", error);
    return "Maaf, ada masalah saat menghubungi Gemini.";
  }
};

export const streamingChat = async (input, history) => {
  try {
    const result = await chat.sendMessage(input, history); // Mengirim pesan pengguna
    const response = result.response.text(); // Mendapatkan respons model
    console.log({ responseApi: response });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return "Terjadi kesalahan saat proses streaming chat.";
  }
};
