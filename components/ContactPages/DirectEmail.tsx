"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

function DirectEmail() {
  const [copied, setCopied] = useState(false);
  const email = "rahulachuz68@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center p-6 px-6 text-center">
      {/* Section Heading */}
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Direct Mail
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          Have a question or want to work together? Reach out directly via email
          below.
        </p>
      </div>

      {/* Email Box */}
      <div className="flex items-center justify-between w-full max-w-lg border border-gray-300 rounded-2xl px-6 py-5 bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-200">
        <p className="text-gray-800 text-lg md:text-xl font-medium truncate">
          {email}
        </p>
        <button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition ${
            copied ? "bg-green-100" : "hover:bg-gray-200"
          }`}
          aria-label="Copy email"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <Copy className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Copied message */}
      {copied && (
        <p className="mt-4 text-green-600 font-medium text-sm">
          Email copied to clipboard!
        </p>
      )}
    </section>
  );
}

export default DirectEmail;
