import { DotLottieWorkerReact } from "@lottiefiles/dotlottie-react";
import React, { useState } from "react";

const HistoryChat = ({ history, loading, error }) => {
  return (
    <div className="flex-grow max-w-lg m-2 flex flex-col min-h-screen">
      <div className="chat-history shadow-[#9ed5ff] p-4 rounded-md shadow-lg sm:text-sm md:text-md max-h-screen overflow-y-auto">
        {history.some((msg) => msg.role === "user") && (
          <p className="text-white font-bold mb-4">Chat History:</p>
        )}
        {loading && (
          <div>
            <DotLottieWorkerReact
              src="https://lottie.host/aec9d21d-71b8-4cf2-93ff-8d4286b8c293/E7Wk1BAGLw.lottie"
              loop
              autoplay
            />
          </div>
        )}
        {history.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.role === "user"
                ? "text-right text-white"
                : "text-left text-green-400"
            } mb-2`}
          >
            <p>{msg.parts?.[0]?.text || "No message content"}</p>
          </div>
        ))}
      </div>
      {error && <p className="text-red-400 text-md mt-2">{error}</p>}
    </div>
  );
};

export default HistoryChat;
