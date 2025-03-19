import React, { useState } from "react";
import Section from "../components/Section";
import HistoryChat from "../components/HistoryChat";
import Input from "../components/Input";
import { streamingChat } from "../services/ChatApi";

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([
    // State untuk menyimpan histori percakapan
    {
      role: "model",
      parts: [{ text: "Hello! How can I assist you today?" }],
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Cegah input kosong

    setLoading(true);

    try {
      // Tambahkan input user ke histori chat
      //.... ambil semua data history yg ada
      const updatedHistory = [
        ...history,
        { role: "user", parts: [{ text: input }] },
      ];

      // Kirim histori ke streamingChat dan dapatkan respons model
      const responseText = await streamingChat(input, updatedHistory); // Fungsi streamingChat menerima input dan histori
      const updatedModelResponse = {
        role: "model",
        parts: [{ text: responseText }],
      };

      // Perbarui histori dengan respons model
      const finalHistory = [...updatedHistory, updatedModelResponse];
      setHistory(finalHistory);
      //simpan data chat ke localstorage
      localStorage.setItem("chatHistory", JSON.stringify(finalHistory));
      setError(""); // Bersihkan error jika sebelumnya ada
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong.");
    }

    setLoading(false);
    setInput(""); // Reset input
  };

  return (
    <div className=" bg-[#0766AD]  flex flex-col items-center justify-center min-h-screen">
      <Section />
      <HistoryChat error={error} loading={loading} history={history} />
      <Input
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        loading={loading}
      />
    </div>
  );
};

export default Home;
