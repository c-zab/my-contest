"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PageOneContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("value") || "No input provided";

  const handleClaim = () => {
    router.push("/success");
  };

  return (
    <div className="h-screen flex flex-col bg-orange-100 text-gray-900">
      <div className="w-full p-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white flex justify-center text-lg font-bold uppercase tracking-widest shadow-md">
        Contest Arena
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-extrabold text-orange-700 uppercase">
          {value}
        </h1>

        <p className="text-lg mt-4 text-gray-700 text-center max-w-md">
          Congratulations! You are now eligible to claim your contest reward.
          Click the button below to proceed.
        </p>

        <button
          onClick={handleClaim}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wider shadow-lg mt-4 transition duration-300"
        >
          Claim
        </button>
      </div>

      <footer className="w-full p-4 bg-yellow-500 text-white flex justify-center text-sm">
        © 2025 Contest Arena. All rights reserved.
      </footer>
    </div>
  );
}

export default function PageOne() {
  return (
    <Suspense fallback={<p className="text-center mt-4">Loading...</p>}>
      <PageOneContent />
    </Suspense>
  );
}
