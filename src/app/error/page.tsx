"use client"; // Ensures it's a Client Component

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/Loading";

function ErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const coupon = searchParams.get("value") || "Unknown";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading size="lg" />;
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#272727] mb-4">
          Invalid Code
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mb-8">
          <div className="mb-4">
            <div className="font-mono text-base bg-[#ffcccc] text-[#E21837] px-3 py-1 rounded border border-[#E21837] inline-block">
              {coupon}
            </div>
          </div>
          <p className="text-[#6B7280]">
            This code is not valid. Please check the code and try again.
          </p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="regular-button"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<Loading size="lg" />}>
      <ErrorContent />
    </Suspense>
  );
}
