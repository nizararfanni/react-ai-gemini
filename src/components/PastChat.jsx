import React, { useEffect, useState } from "react";

const PastChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    const finalHistory = localStorage.getItem("chatHistory");
    if (finalHistory) {
      try {
        setChatHistory(JSON.parse(finalHistory));
      } catch {
        console.error("Failed to parse chat history:", error);
      }
    }
  });
  return (
    <div className="flex flex-col container bg-blue-300 mx-auto  p-8 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 text-center">Histori Percakapan</h1>
      {chatHistory.length > 0 ? (
        chatHistory.map((entry, index) => (
          <div key={index}>
            <strong>{entry.role === "user" ? "User:" : "Model:"}</strong>
            <p>{entry.parts[0].text}</p>
          </div>
        ))
      ) : (
        <p>Tidak ada histori percakapan.</p>
      )}
    </div>
  );
};

export default PastChat;
