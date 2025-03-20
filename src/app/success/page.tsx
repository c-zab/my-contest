"use client";

import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col bg-green-100 text-gray-900">
      <div className="w-full p-4 bg-gradient-to-r from-green-500 to-teal-400 text-white flex justify-center text-lg font-bold uppercase tracking-widest shadow-md">
        Contest Arena
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold text-green-600 uppercase">
          Success!
        </h1>
        <p className="text-lg mt-4 text-gray-700 text-center max-w-md">
          Your claim has been successfully submitted. Stay tuned for the contest
          results!
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wider shadow-lg mt-4 transition duration-300"
        >
          Participate Again
        </button>
      </div>

      <footer className="w-full p-4 bg-green-500 text-white flex justify-center text-sm">
        © 2025 Contest Arena. All rights reserved.
      </footer>
    </div>
  );
}
