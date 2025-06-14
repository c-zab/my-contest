"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface EntryData {
  code: string;
  name: string;
  email: string;
  phone: string;
}

interface EntryContextType {
  entry: EntryData | null;
  setEntry: (data: EntryData | null) => void;
}

const EntryContext = createContext<EntryContextType | undefined>(undefined);

export function EntryProvider({ children }: { children: ReactNode }) {
  const [entry, setEntry] = useState<EntryData | null>(null);
  return (
    <EntryContext.Provider value={{ entry, setEntry }}>
      {children}
    </EntryContext.Provider>
  );
}

export function useEntry() {
  const context = useContext(EntryContext);
  if (!context) {
    throw new Error("useEntry must be used within an EntryProvider");
  }
  return context;
} 