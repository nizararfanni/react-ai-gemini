import React, { useState } from "react";

import "./App.css";
import { generativeContent } from "./services/ChatApi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const text = await generativeContent(input);
      setResponse(text);
      console.log(text);
    } catch (error) {
      console.error("Error:", error);
      setError("something went wrong");
    }

    setLoading(false);
    setInput("");
  };

  return (
    <div className="container bg-[#205781] m-auto flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center items-start p-4 shadow-lg rounded-md shadow-[#3674B5] py-3 mt-4">
        <h1 className="text-3xl font-bold text-white">
          Lets start chat with AI
        </h1>
      </div>
      {/* Spacer agar tombol input di dorong ke bawah */}
      <div className="flex-grow max-w-lg m-2 flex flex-col min-h-screen">
        <h3 className="text-sm font-semibold text-white flex text-center  items-center justify-center mb-2">
          Jawaban:
        </h3>{" "}
        {loading && (
          <div>
            <DotLottieReact
              src="https://lottie.host/aec9d21d-71b8-4cf2-93ff-8d4286b8c293/E7Wk1BAGLw.lottie"
              loop
              autoplay
            />
          </div>
        )}
        {response && (
          <div className="text-white text-md ">
            <p>{response}</p>
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="flex w-full mb-5 fixed bottom-0 ">
        <form
          onSubmit={handleSubmit}
          className="relative w-full m-2 text-center "
        >
          {/* Input Field */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya apa saja..."
            disabled={loading}
            className="pr-12 pl-4 py-3 rounded-md font-semibold shadow-lg w-full text-[#FBF8EF] outline-sky-400 bg-[#205781] shadow-[#3674B5]"
          />

          {/* Tombol di Dalam Input */}
          <button
            type="submit"
            disabled={loading}
            className="absolute right-16 top-1/2  transform -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full shadow-md"
          >
            {/* Ikon Pesawat Kertas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21l16.5-9L3.75 3v7.5l11.25 1.5-11.25 1.5V21z"
              />
            </svg>
          </button>
          <button
            type="submit"
            disabled={loading}
            className="absolute right-4 top-1/2  transform -translate-y-1/2 bg-red-300 hover:bg-red-400 text-white p-2 rounded-full shadow-md"
          >
            {/* Ikon Pesawat Kertas */}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
