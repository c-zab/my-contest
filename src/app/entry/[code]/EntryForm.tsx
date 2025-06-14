"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";
import { useEntry } from "@/app/context/EntryContext";

interface EntryFormProps {
  code: string;
}

export default function EntryForm({ code }: EntryFormProps) {
  const router = useRouter();
  const { setEntry } = useEntry();
  const [isLoading, setIsLoading] = useState(true);
  const [entryData, setEntryData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEntry({
      code,
      name: entryData.name,
      email: entryData.email,
      phone: entryData.phone,
    });
    router.push("/success");
  };

  if (isLoading) {
    return <Loading size="lg" />;
  }

  return (
    <div className="flex-grow flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#272727] mb-2">
            Enter the Contest
          </h1>
          <p className="text-[#6B7280]">
            Code: <span className="font-mono font-bold text-[#2175DD]">{code}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#272727] mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              autoFocus
              value={entryData.name}
              onChange={(e) => setEntryData({ ...entryData, name: e.target.value })}
              className="select-input w-full"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#272727] mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={entryData.email}
              onChange={(e) => setEntryData({ ...entryData, email: e.target.value })}
              className="select-input w-full"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#272727] mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={entryData.phone}
              onChange={(e) => setEntryData({ ...entryData, phone: e.target.value })}
              className="select-input w-full"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="regular-button w-full"
            >
              Submit Entry
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-[#2175DD] hover:underline text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
} 