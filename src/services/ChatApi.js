import { GoogleGenerativeAI } from "@google/generative-ai";

// api key dari folder env
const apiKey = import.meta.env.VITE_API_KEY;
const geniAi = new GoogleGenerativeAI(apiKey);

// dia nerina parameters input buat nanmpung state input yg ada di form
export const generativeContent = async (input) => {
  try {
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
    const result = await model.generateContent(input);
    const response = result.response;
    // console.log("Response:", response.text());
    return response.text();
  } catch (error) {
    console.error("Error:", error);
    return "Maaf, ada masalah saat menghubungi Gemini.";
  }
};
