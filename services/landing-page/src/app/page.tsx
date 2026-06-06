"use client";

import React, { useEffect,useState } from "react";

export default function DevFestLagos2026() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [selectedTicket, setSelectedTicket] = useState<"standard" | "vip">("standard");

  // Target Date: November 13, 2026
  useEffect(() => {
    const targetDate = new Date("2026-11-13T09:00:00+01:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTicketUrl = () => {
    return selectedTicket === "standard"
      ? "https://tickets.devfestlagos.com/buy#standard"
      : "https://tickets.devfestlagos.com/buy#pro";
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0c] text-white selection:bg-[#EA4335] selection:text-white">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4285F4]/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#EA4335]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#FBBC05]/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-[#34A853]/10 blur-[120px]" />
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="w-full px-6 py-5 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-md bg-black/10">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo.svg" alt="DevFest Lagos" className="h-8 md:h-10 filter brightness-0 invert" />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://2025.devfestlagos.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              2025 Edition
            </a>
            <span className="h-4 w-px bg-white/20" />
            <span className="px-3 py-1 text-xs font-semibold bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20 rounded-full">
              Nov 13-14, 2026
            </span>
          </div>
        </header>

        {/* Hero & Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-12 lg:py-20 max-w-7xl mx-auto w-full gap-12 lg:gap-8">
          {/* Left Hero Section */}
          <div className="flex-1 text-left flex flex-col gap-6 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">DevFest Lagos Returns</span>
            </div>

            <h1 className="font-akira text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              THE BIGGEST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">
                TECH EVENT
              </span> <br />
              IN LAGOS
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
              DevFest Lagos is officially back for 2026. Join thousands of developers, designers, entrepreneurs, and tech enthusiasts for two days of learning, networking, and futuristic innovation.
            </p>

            {/* Date Badge Info */}
            <div className="flex flex-wrap gap-4 py-2">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-md">
                <div className="p-2 rounded-xl bg-[#4285F4]/10 text-[#4285F4]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Date</div>
                  <div className="font-semibold text-white">November 13 & 14, 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-md">
                <div className="p-2 rounded-xl bg-[#EA4335]/10 text-[#EA4335]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Venue</div>
                  <div className="font-semibold text-white">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Countdown Section */}
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Countdown to the launch</span>
              <div className="flex gap-2 sm:gap-4">
                {[
                  { value: countdown.days, label: "Days", color: "#4285F4" },
                  { value: countdown.hours, label: "Hrs", color: "#EA4335" },
                  { value: countdown.minutes, label: "Mins", color: "#FBBC05" },
                  { value: countdown.seconds, label: "Secs", color: "#34A853" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-3 py-2 sm:px-5 sm:py-3 w-16 sm:w-20 backdrop-blur-md">
                    <span className="text-xl sm:text-2xl font-bold font-mono" style={{ color: item.color }}>
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold mt-0.5">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Ticket Section */}
          <div className="w-full lg:w-[450px] relative">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />
            
            <div className="relative bg-[#111115] border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-xl flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Get Your Early Bird Ticket
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Secure your spot at the most anticipated tech gathering of the year. Standard prices rise soon.
                </p>
              </div>

              {/* Ticket Type Toggle */}
              <div className="grid grid-cols-2 p-1 bg-white/5 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedTicket("standard")}
                  className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    selectedTicket === "standard"
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Standard Ticket
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTicket("vip")}
                  className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    selectedTicket === "vip"
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Full Experience
                </button>
              </div>

              {/* Dynamic Ticket Details */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-[#4285F4] font-bold">
                    {selectedTicket === "standard" ? "Standard Ticket" : "Full Experience Ticket"}
                  </span>
                  <span className="text-2xl font-black text-white mt-1">
                    {selectedTicket === "standard" ? "₦8,000" : "₦15,000"}{" "}
                    <span className="text-sm font-normal text-gray-400">
                      {selectedTicket === "standard" ? "per day" : "BOTH DAYS"}
                    </span>
                  </span>
                </div>

                <p className="text-sm text-gray-400 italic">
                  {selectedTicket === "standard"
                    ? "Open to everyone — whether you're just starting out or deep in the industry"
                    : "For those who want more access and a more focused, premium experience across both days"}
                </p>

                <hr className="border-white/10" />

                <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
                  {selectedTicket === "standard" ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to all talks and sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to one day
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to sponsor booths
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Entry to the networking area
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to all talks and sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to both days
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Access to sponsor booths
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34A853]">✓</span> Entry to the networking area
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Purchase Action Button */}
              <a
                href={getTicketUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] p-[1px] focus:outline-none transition-all block text-center"
              >
                <div className="relative flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-[#111115] text-white hover:bg-transparent transition-all font-semibold text-sm">
                  <span>Buy Ticket</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 border-t border-white/5 bg-black/20 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4">
          <div>
            &copy; 2026 GDG Lagos.
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com/gdglagos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="https://instagram.com/gdglagos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
