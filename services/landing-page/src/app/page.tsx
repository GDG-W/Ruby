"use client";

import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#1e1e1e] font-inter selection:bg-[#ea4335] selection:text-white relative">
      {/* Editorial grid lines background pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ 
          backgroundImage: "radial-gradient(circle at 1px 1px, #1e1e1e 1.5px, transparent 0)", 
          backgroundSize: "24px 24px" 
        }}
        aria-hidden="true"
      />

      {/* Top Banner / Announcement ticker */}
      <div className="bg-[#1e1e1e] text-[#ffe7a5] text-[11px] sm:text-xs font-mono py-2.5 px-4 text-center border-b border-[#1e1e1e] uppercase tracking-widest flex items-center justify-center gap-4 overflow-hidden">
        <span className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 bg-[#5cdb6d] rounded-full inline-block" />
          Early bird passes are live!
        </span>
        <span className="hidden md:inline-block shrink-0 opacity-40">|</span>
        <span className="hidden md:inline-block shrink-0">
          13–14 November 2026 · 14th Edition
        </span>
        <span className="hidden md:inline-block shrink-0 opacity-40">|</span>
        <span className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 bg-[#ff7daf] rounded-full inline-block animate-pulse" />
          Call for Proposals (CfP) is now open
        </span>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#f0f0f0] border-b-2 border-[#1e1e1e] backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-5 flex justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-3 no-underline group" aria-label="DevFest Lagos Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo.svg" alt="DevFest Lagos" className="h-7 sm:h-9" />
            <span className="font-space font-bold text-xl sm:text-2xl text-[#ea4335] tracking-tight group-hover:rotate-6 transition-transform inline-block">
              2026
            </span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <a 
              href="#cfp" 
              className="text-xs sm:text-sm font-bold text-[#1e1e1e] hover:text-[#ea4335] transition-colors uppercase tracking-wider"
            >
              CFP
            </a>
            <a 
              href="https://2025.devfestlagos.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#1e1e1e]/70 hover:text-[#34a853] transition-colors uppercase tracking-wider"
            >
              2025 site
            </a>
            <a 
              href="#tickets" 
              className="font-space text-xs sm:text-sm font-bold bg-[#1e1e1e] text-[#f0f0f0] px-4 py-2 border-2 border-[#1e1e1e] hover:bg-[#ffe7a5] hover:text-[#1e1e1e] transition-all shadow-[3px_3px_0px_#1e1e1e]"
            >
              Buy Ticket
            </a>
          </nav>
        </div>
      </header>

      {/* Editorial Hero Layout */}
      <section className="relative py-16 lg:py-24 border-b-2 border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Content Area */}
            <div>
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1e1e1e] bg-[#ffe7a5] border-2 border-[#1e1e1e] px-3.5 py-1">
                  Lagos, Nigeria
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#f0f0f0] bg-[#ea4335] border-2 border-[#1e1e1e] px-3.5 py-1">
                  13–14 Nov 2026
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1e1e1e] bg-[#57caff] border-2 border-[#1e1e1e] px-3.5 py-1">
                  In-Person
                </span>
              </div>

              <h1 className="font-space font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-[#1e1e1e]">
                DEVFEST <br />
                LAGOS <span className="text-[#ea4335]">2026.</span>
              </h1>


            </div>

            {/* Right Side: Retro Editorial Information Panel */}
            <div className="w-full flex flex-col gap-6">
              {/* Retro Ticket Announcement Box */}
              <div className="bg-[#ffe7a5] border-2 border-[#1e1e1e] p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#ea4335] text-white font-mono text-[10px] font-bold px-3 py-1 uppercase border-b-2 border-l-2 border-[#1e1e1e]">
                  Milestone
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#ea4335] animate-ping" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#ea4335] font-bold">Registration Alert</span>
                </div>
                <h3 className="font-space font-bold text-2xl sm:text-3xl text-[#1e1e1e] mt-2 mb-4">Early Bird Active</h3>
                <p className="text-sm text-[#1e1e1e]/80 leading-relaxed mb-6 font-medium">
                  Secure your standard or full experience pass today with earlybird pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#tickets" 
                    className="font-space text-center text-xs font-bold bg-[#1e1e1e] text-[#f0f0f0] px-5 py-3 border-2 border-[#1e1e1e] hover:bg-[#f0f0f0] hover:text-[#1e1e1e] transition-all uppercase tracking-wider shadow-[3px_3px_0px_#1e1e1e] hover:shadow-none"
                  >
                    View Ticket Tiers
                  </a>
                </div>
              </div>

              {/* Countdown Ticker Box */}
              <div className="bg-[#c3ecf6] border-2 border-[#1e1e1e] p-6 shadow-[6px_6px_0px_#1e1e1e] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#1e1e1e]/70 font-bold block mb-3">Countdown to DevFest Lagos 2026</span>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono">
                    <div className="bg-[#f0f0f0] border-2 border-[#1e1e1e] py-2">
                      <span className="text-xl sm:text-2xl font-bold block text-[#1e1e1e]">{countdown.days}</span>
                      <span className="text-[9px] uppercase tracking-wider block text-[#1e1e1e]/60">Days</span>
                    </div>
                    <div className="bg-[#f0f0f0] border-2 border-[#1e1e1e] py-2">
                      <span className="text-xl sm:text-2xl font-bold block text-[#1e1e1e]">{countdown.hours}</span>
                      <span className="text-[9px] uppercase tracking-wider block text-[#1e1e1e]/60">Hours</span>
                    </div>
                    <div className="bg-[#f0f0f0] border-2 border-[#1e1e1e] py-2">
                      <span className="text-xl sm:text-2xl font-bold block text-[#1e1e1e]">{countdown.minutes}</span>
                      <span className="text-[9px] uppercase tracking-wider block text-[#1e1e1e]/60">Mins</span>
                    </div>
                    <div className="bg-[#f0f0f0] border-2 border-[#1e1e1e] py-2">
                      <span className="text-xl sm:text-2xl font-bold block text-[#1e1e1e]">{countdown.seconds}</span>
                      <span className="text-[9px] uppercase tracking-wider block text-[#1e1e1e]/60">Secs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flat Editorial Metric Stripe */}
      <section className="bg-[#f0f0f0] border-b-2 border-[#1e1e1e]" aria-label="DevFest highlights">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#1e1e1e] flex flex-col justify-center">
              <span className="font-space font-bold text-5xl text-[#ea4335] leading-none mb-1">2 DAYS</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1e1e1e]/70">13 & 14 November 2026</span>
            </div>
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#1e1e1e] flex flex-col justify-center">
              <span className="font-space font-bold text-5xl text-[#4285f4] leading-none mb-1">4+ TRACKS</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1e1e1e]/70">Specialized technical disciplines</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-space font-bold text-5xl text-[#f9ab00] leading-none mb-1">14 YEARS</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1e1e1e]/70">Lagos tech community legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Proposals (CfP) Section */}
      <section className="py-20 border-b-2 border-[#1e1e1e] bg-[#f8d8d8] relative overflow-hidden" id="cfp">
        {/* Editorial pattern lines only inside this section */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "repeating-linear-gradient(45deg, #1e1e1e, #1e1e1e 1px, transparent 1px, transparent 10px)", 
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Info & Copy */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#ea4335] bg-[#f0f0f0] border border-[#1e1e1e] px-3 py-1 font-bold inline-block mb-4">
                Call For Speakers
              </span>
              <h2 className="font-space font-bold text-3xl sm:text-5xl text-[#1e1e1e] leading-tight mb-6">
               Inspire the Community.
              </h2>
              <div className="space-y-4 text-[#1e1e1e]/80 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                <p>
                  We are looking for passionate and experienced speakers to share insights, lead sessions, and drive meaningful conversations that will shape the future of technology in Africa. If you have an insightful topic, the experience, or a vision that aligns with our mission, we want to hear from you.
                </p>
                <p className="text-xs text-[#1e1e1e]/75 italic bg-[#f0f0f0]/40 p-3.5 border-l-2 border-[#ea4335]">
                  We’re also spotlighting career development, startups, women in tech, and ecosystem growth through hands-on workshops, bootcamps, hackathons, masterclasses, and community-driven sessions.
                </p>
              </div>

              <div className="flex">
                <a 
                  href="http://tinyurl.com/cfp-devfestlagos26" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-space font-bold bg-[#1e1e1e] text-[#f0f0f0] px-6 py-4 border-2 border-[#1e1e1e] hover:bg-[#f0f0f0] hover:text-[#1e1e1e] transition-all uppercase tracking-wider text-sm shadow-[4px_4px_0px_#1e1e1e]"
                >
                  Submit Proposal
                </a>
              </div>
            </div>

            {/* Right Column: Timeline Box */}
            <div className="bg-[#f0f0f0] border-2 border-[#1e1e1e] p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e]">
              <h3 className="font-space font-bold text-2xl text-[#1e1e1e] mb-6 pb-4 border-b border-[#1e1e1e]">
                CfP Timeline
              </h3>
              
              <ol className="relative border-l border-[#1e1e1e]/30 pl-4 sm:pl-6 ml-2 space-y-6 text-left">
                {/* Milestone 1 */}
                <li className="relative">
                  <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#34a853] border border-[#1e1e1e]" />
                  <span className="font-mono text-[10px] uppercase font-bold text-[#34a853] tracking-widest block">May 2026</span>
                  <h4 className="font-space font-bold text-lg text-[#1e1e1e] mt-0.5 mb-1">Submissions Open</h4>
                  <p className="text-xs text-[#1e1e1e]/70 leading-relaxed font-medium">Portal opens globally. Review tracks and start registering outline abstracts.</p>
                </li>

                {/* Milestone 2 */}
                <li className="relative">
                  <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#ea4335] border border-[#1e1e1e]" />
                  <span className="font-mono text-[10px] uppercase font-bold text-[#ea4335] tracking-widest block">July 30, 2026</span>
                  <h4 className="font-space font-bold text-lg text-[#1e1e1e] mt-0.5 mb-1">CfP Closes</h4>
                  <p className="text-xs text-[#1e1e1e]/70 leading-relaxed font-medium">The absolute final deadline to register speaker proposals. No extensions.</p>
                </li>

                {/* Milestone 3 */}
                <li className="relative">
                  <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#f9ab00] border border-[#1e1e1e]" />
                  <span className="font-mono text-[10px] uppercase font-bold text-[#f9ab00] tracking-widest block">From July 30, 2026</span>
                  <h4 className="font-space font-bold text-lg text-[#1e1e1e] mt-0.5 mb-1">Speaker Announcement</h4>
                  <p className="text-xs text-[#1e1e1e]/70 leading-relaxed font-medium">Core review panel processes drafts and announces selected talk sessions.</p>
                </li>
              </ol>

              {/* Repositioned Speaker Tracks Container */}
              <div className="border-t border-[#1e1e1e] pt-6 mt-8">
                <h4 className="font-space font-bold text-xs uppercase tracking-wider text-[#1e1e1e] mb-3">Preferred Speaker Tracks</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] bg-[#ccf6c5] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">AI/ML</span>
                  <span className="font-mono text-[10px] bg-[#c3ecf6] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Cloud & DevOps</span>
                  <span className="font-mono text-[10px] bg-[#ffe7a5] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Web Technologies</span>
                  <span className="font-mono text-[10px] bg-[#f0f0f0] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Mobile Development</span>
                  <span className="font-mono text-[10px] bg-[#f8d8d8] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Design & UX</span>
                  <span className="font-mono text-[10px] bg-[#ffe7a5] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Product Management</span>
                  <span className="font-mono text-[10px] bg-[#ccf6c5] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Technical Writing</span>
                  <span className="font-mono text-[10px] bg-[#c3ecf6] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Data Engineering</span>
                  <span className="font-mono text-[10px] bg-[#f0f0f0] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Web3</span>
                  <span className="font-mono text-[10px] bg-[#f8d8d8] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Cybersecurity</span>
                  <span className="font-mono text-[10px] bg-[#ffe7a5] border border-[#1e1e1e] px-2.5 py-1 text-[#1e1e1e] font-bold">Agentic Experience</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 border-b-2 border-[#1e1e1e] bg-[#f0f0f0]" id="tickets">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl mx-auto">
            
            {/* Center Ticket Selector & Details Column */}
            <div className="relative">
              <div className="bg-white border-2 border-[#1e1e1e] p-6 sm:p-8 flex flex-col gap-6 relative shadow-[6px_6px_0px_#1e1e1e]">
                
                {/* Custom Ticket Selector */}
                <div className="grid grid-cols-2 p-1.5 bg-[#f0f0f0] border-2 border-[#1e1e1e]">
                  <button
                    type="button"
                    onClick={() => setSelectedTicket("standard")}
                    className={`py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border-2 ${
                      selectedTicket === "standard"
                        ? "bg-[#1e1e1e] text-white border-[#1e1e1e]"
                        : "bg-transparent text-[#1e1e1e]/60 border-transparent hover:text-[#1e1e1e]"
                    }`}
                  >
                    Standard Tier
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTicket("vip")}
                    className={`py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border-2 ${
                      selectedTicket === "vip"
                        ? "bg-[#1e1e1e] text-white border-[#1e1e1e]"
                        : "bg-transparent text-[#1e1e1e]/60 border-transparent hover:text-[#1e1e1e]"
                    }`}
                  >
                    Full Experience
                  </button>
                </div>

                {/* Dynamic Ticket Display Pane */}
                {selectedTicket === "standard" ? (
                  <div className="border-2 border-[#1e1e1e] bg-[#ccf6c5] p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#34a853] bg-white border border-[#1e1e1e] px-2.5 py-0.5 rounded-full font-bold">
                          Single Day
                        </span>
                        <h4 className="font-space font-bold text-2xl text-[#1e1e1e] mt-2">
                          Standard Ticket
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-[#1e1e1e] block leading-none">
                          ₦8,000
                        </span>
                        <span className="text-[10px] text-[#1e1e1e]/60 uppercase font-mono font-bold">
                          per day
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#1e1e1e]/80 font-bold leading-relaxed pt-3 border-t border-[#1e1e1e]/20">
                      Open to everyone — whether you&apos;re just starting out or deep in the industry.
                    </p>

                    <ul className="flex flex-col gap-2 text-xs text-[#1e1e1e] pt-2 font-bold font-mono">
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to all talks and sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to one day
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to sponsor booths
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Entry to the networking area
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="border-2 border-[#1e1e1e] bg-[#c3ecf6] p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#4285f4] bg-white border border-[#1e1e1e] px-2.5 py-0.5 rounded-full font-bold">
                          Two Days Full Pass
                        </span>
                        <h4 className="font-space font-bold text-2xl text-[#1e1e1e] mt-2">
                          Full Experience
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-[#1e1e1e] block leading-none">
                          ₦15,000
                        </span>
                        <span className="text-[10px] text-[#1e1e1e]/60 uppercase font-mono font-bold">
                          both days
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#1e1e1e]/80 font-bold leading-relaxed pt-3 border-t border-[#1e1e1e]/20">
                      For those who want more access and a more focused, premium experience across both days.
                    </p>

                    <ul className="flex flex-col gap-2 text-xs text-[#1e1e1e] pt-2 font-bold font-mono">
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to all talks and sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to both days
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Access to sponsor booths
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#34a853]">✓</span> Entry to the networking area
                      </li>
                    </ul>
                  </div>
                )}

                <a
                  href={
                    selectedTicket === "standard"
                      ? "https://tickets.devfestlagos.com/buy#standard"
                      : "https://tickets.devfestlagos.com/buy#pro"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1e1e1e] text-white border-2 border-[#1e1e1e] text-center py-4 font-space font-bold transition-all text-sm uppercase tracking-wider shadow-[4px_4px_0px_#1e1e1e] hover:shadow-none"
                >
                  Secure Ticket
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1e1e] text-[#f0f0f0] pt-16 pb-12 px-5 lg:px-12 relative overflow-hidden">
        {/* Subtle grid pattern inside footer */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, #f0f0f0 1.5px, transparent 0)", 
            backgroundSize: "20px 24px" 
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#f0f0f0]/10 pb-12 relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <Link href="/" className="flex items-center gap-3 no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Logo.svg" alt="DevFest Lagos Logo" className="h-7 sm:h-9 filter brightness-0 invert" />
              <span className="font-space font-bold text-2xl text-white"> <span className="text-[#ea4335]">2026</span></span>
            </Link>
            <p className="text-xs text-[#f0f0f0]/60 mt-1 max-w-[320px] leading-relaxed">
              Google Developer Groups Lagos community-led tech conference.
            </p>
          </div>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
            <a href="https://twitter.com/gdglagos" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe7a5] transition-colors">Twitter / X</a>
            <a href="https://instagram.com/gdglagos" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe7a5] transition-colors">Instagram</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 text-center text-[10px] text-[#f0f0f0]/40 uppercase tracking-widest font-mono relative z-10 font-bold">
          &copy; 2026 GDG Lagos. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
