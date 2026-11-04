import React, { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { profile } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-black text-white pt-20 md:pt-28 pb-14 md:pb-16 select-none">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.15] text-white font-heading">
            Curious about what we can create together?{" "}
            <span className="text-neutral-400">Let’s bring something extraordinary to life!</span>
          </h2>
        </div>

        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="bg-white hover:bg-neutral-200 text-black font-semibold text-sm px-7 py-3.5 rounded-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-medium text-white">Available For Work</span>
          </div>
        </div>

        <div className="border-t border-neutral-800 my-16 md:my-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-xs md:text-sm text-neutral-400">
          <div className="space-y-1.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-white hover:text-neutral-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{profile.email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-500" />
              )}
            </button>
            <p className="text-neutral-500">Ahmedabad, India · Remote Worldwide</p>
          </div>

          <div className="space-y-1">
            <p className="text-neutral-500">Designed & Developed</p>
            <p className="text-white font-medium">by {profile.name}</p>
          </div>

          <div className="space-y-1 lg:text-right">
            <p className="text-neutral-500">All rights reserved,</p>
            <p className="text-white font-medium">
              {profile.firstName.toUpperCase()} © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
