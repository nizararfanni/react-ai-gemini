import React, { useState } from "react";

const Input = ({ handleSubmit, input, setInput, loading }) => {
  return (
    <div className="flex w-full mb-5 fixed bottom-0 ">
      <form
        onSubmit={handleSubmit}
        className="relative w-full m-2 text-center "
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          // disabled={loading}
          className="pr-12 pl-4 py-3 rounded-md font-semibold shadow-lg w-full text-[#FBF8EF] outline-[#91C8E4] outline-2 bg-[#0766AD] shadow-[#3674B5]"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full shadow-md"
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
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-300 hover:bg-red-400 text-white p-2 rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />{" "}
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
