import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  return (
    <section className="pt-24 md:pt-36 lg:pt-40 pb-14 md:pb-20">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-[60px] sm:text-[90px] md:text-[116px] lg:text-[144px] xl:text-[160px] font-bold tracking-[-0.04em] leading-[0.88] text-black select-none font-heading">
              <span className="block">{profile.firstName}</span>
              <span className="block">{profile.lastName}</span>
            </h1>
          </div>

          <div className="self-end md:self-start flex-shrink-0 pt-2 md:pt-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-neutral-100 ring-1 ring-black/10 shadow-sm relative group">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-5">
            <div className="relative inline-flex items-center">
              <button
                type="button"
                onClick={handleCopy}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="group flex items-center gap-2 text-base md:text-lg text-black hover:opacity-70 transition-opacity font-medium cursor-pointer"
                aria-label="Copy email address"
              >
                <span>{profile.email}</span>
                <span className="p-1 rounded hover:bg-neutral-100 transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
                  )}
                </span>
              </button>

              {(hovered || copied) && (
                <div className="absolute left-0 -top-9 px-2.5 py-1 bg-black text-white text-xs rounded-sm shadow-md whitespace-nowrap z-20 pointer-events-none transition-opacity">
                  {copied ? "Copied!" : "Copy to Clipboard"}
                  <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-black" />
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-black font-normal leading-[1.25] tracking-tight">
              {profile.shortIntro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
