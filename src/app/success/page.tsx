"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import { useEntry } from "../context/EntryContext";

export default function SuccessPage() {
  const router = useRouter();
  const { entry } = useEntry();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading size="lg" />;
  }

  if (!entry) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-3xl mb-4">🤔</div>
          <h1 className="text-xl font-bold text-[#E21837] mb-2">No Entry Data</h1>
          <p className="text-[#6B7280] mb-6">We couldn&apos;t find your entry information. Please submit your entry again.</p>
          <button
            onClick={() => router.push("/")}
            className="regular-button w-full"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { code, name, email, phone } = entry;

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <span className="text-5xl">🎉</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2175DD] mb-2">
          {name ? `Congratulations, ${name}!` : "Congratulations!"}
        </h1>
        <div className="flex justify-center my-4">
          <span className="inline-flex items-center font-mono text-lg bg-[#e6f3ff] text-[#2175DD] px-4 py-2 rounded border border-[#2175DD]">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            {code}
          </span>
        </div>
        <p className="text-[#272727] text-base mb-2">
          Your entry has been received and a confirmation was sent to <span className="font-semibold">{email}</span>.
        </p>
        <p className="text-[#6B7280] text-sm mb-6">
          We&apos;ll contact you at <span className="font-semibold">{phone}</span> if you win.
        </p>
        <div className="border-t border-[#e6f3ff] pt-4 mt-4 text-[#6B7280] text-sm">
          <div className="mb-1 font-semibold text-[#2175DD]">What&apos;s Next?</div>
          <ul className="space-y-1">
                          <li>• We&apos;ll review your entry</li>
            <li>• Winners announced May 15, 2024</li>
            <li>• Check your email for updates</li>
          </ul>
        </div>
        <button
          onClick={() => router.push("/")}
          className="regular-button w-full mt-8"
        >
          Enter Another Code
        </button>
      </div>
    </div>
  );
}
