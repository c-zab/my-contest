"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Use a small delay to ensure the input is rendered before focusing
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsDisabled(inputValue === "");
  }, [inputValue]);

  const handleSubmit = () => {
    const value = encodeURIComponent(inputValue);
    if (inputValue === "") return;
    if (/^\d+$/.test(inputValue)) {
      router.push(`/entry/${value}`);
    } else {
      router.push(`/error?value=${value}`);
    }
  };

  if (isLoading) {
    return <Loading size="lg" />;
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#272727]">
        Join the Contest!
      </h1>

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your coupon code"
        className="select-input w-64 mb-4 focus:ring-2 focus:ring-[#2175DD] focus:outline-none"
      />

      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`regular-button ${isDisabled ? 'opacity-50' : ''}`}
      >
        Enter Now
      </button>
    </div>
  );
}
