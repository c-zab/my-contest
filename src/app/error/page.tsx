"use client"; // Ensures it's a Client Component

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const coupon = searchParams.get("value") || "Unknown";

  return (
    <div className="h-screen flex flex-col bg-red-100 text-gray-900">
      <div className="w-full p-4 bg-gradient-to-r from-red-500 to-orange-400 text-white flex justify-center text-lg font-bold uppercase tracking-widest shadow-md">
        Contest Arena
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold text-red-600 uppercase">
          Error
        </h1>
        <p className="text-lg mt-4 text-gray-700 text-center max-w-md">
          Oops! The coupon{" "}
          <span className="font-bold text-red-500">{coupon}</span> is invalid.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wider shadow-lg mt-4 transition duration-300"
        >
          Go to Home
        </button>
      </div>

      <footer className="w-full p-4 bg-orange-500 text-white flex justify-center text-sm">
        © 2025 Contest Arena. All rights reserved.
      </footer>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<p className="text-center mt-4">Loading...</p>}>
      <ErrorContent />
    </Suspense>
  );
}
