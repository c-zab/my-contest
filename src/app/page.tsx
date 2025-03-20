"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [plop, setPlop] = useState(false);

  useEffect(() => {
    const isActive = inputValue === "";
    setPlop(isActive);
  }, [inputValue]);

  const handleSubmit = () => {
    const value = encodeURIComponent(inputValue);
    if (inputValue === "") return;
    if (/^\d+$/.test(inputValue)) {
      router.push(`/pageOne?value=${value}`);
    } else {
      router.push(`/error?value=${value}`);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-orange-100 text-gray-900">
      <div className="w-full p-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white flex justify-center text-lg font-bold uppercase tracking-widest shadow-md">
        Contest Arena
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-orange-700">
          Join the Contest!
        </h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your coupon code"
          className="border p-2 mb-4 w-64 rounded bg-white text-gray-900 shadow-md focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={handleSubmit}
          disabled={plop}
          className={`bg-orange-${plop ? 300 : 500} hover:bg-orange-${
            plop ? 300 : 600
          } text-white px-6 py-3 rounded font-bold uppercase tracking-wider shadow-lg transition duration-300`}
        >
          Enter Now
        </button>
      </div>

      <footer className="w-full p-4 bg-yellow-500 text-white flex justify-center text-sm">
        © 2025 Contest Arena. All rights reserved.
      </footer>
    </div>
  );
}
