import React from 'react';
import { motion } from 'motion/react';

// Generous, palpable slide & fade transitions with ample duration
const headerTransition = {
  duration: 2.4,
  ease: [0.16, 1, 0.3, 1] as const,
};

const centerBodyTransition = {
  duration: 3.2,
  ease: [0.16, 1, 0.3, 1] as const,
};

const bottomTransition = {
  duration: 2.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function App() {
  return (
    <main
      className="min-h-screen w-full bg-[#0b0c0e] relative overflow-hidden flex flex-col justify-between select-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 25%, #131519 0%, #0a0b0d 100%)',
      }}
    >
      {/* ===================== Top Header (Slide-fades from above: y: -36) ===================== */}
      <motion.header
        initial={{ opacity: 0, y: -36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={headerTransition}
        className="w-full px-6 sm:px-12 md:px-16 lg:px-20 pt-7 sm:pt-9 relative z-20"
      >
        <div className="w-full relative flex items-center justify-between">
          {/* Left: Nav skeleton items */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-9 sm:w-11 md:w-12 h-2.5 sm:h-3 rounded-full bg-[#8c929f]" />
            <div className="w-18 sm:w-22 md:w-26 h-2.5 sm:h-3 rounded-full bg-[#505562]" />
            <div className="flex items-center gap-1.5">
              <div className="w-8 sm:w-10 md:w-11 h-2.5 sm:h-3 rounded-full bg-[#505562]" />
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#505562] shrink-0"
              >
                <path
                  d="M1 1.2L4.5 4.7L8 1.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Center: Perfectly Centralized Logo Placeholder Container */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div
              className="w-14 sm:w-16 h-6 sm:h-7 rounded-lg bg-[#cbcfd8]"
              aria-label="Logo placeholder"
            />
          </div>

          {/* Right: Rounded Rect Button Skeleton */}
          <div className="w-18 sm:w-22 md:w-[92px] h-7 sm:h-8.5 rounded-lg border border-[#333744] bg-[#1e2027]/70 flex items-center justify-center px-2.5">
            <div className="w-10 sm:w-12 md:w-13 h-2.5 sm:h-3 rounded-full bg-[#bcc1cc]" />
          </div>
        </div>
      </motion.header>

      {/* ===================== Center Hero Body (Substantial, deep slide-fade from below: y: 64 over 3.2s) ===================== */}
      <motion.section
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={centerBodyTransition}
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-4 pb-10 md:pb-14 z-10"
      >
        <div className="flex flex-col items-center w-full max-w-3xl">
          {/* Headline Line 1 */}
          <div className="w-[90%] sm:w-[560px] md:w-[620px] h-9 sm:h-10 md:h-11 rounded-full bg-[#cbcfd8]" />

          {/* Headline Line 2 */}
          <div className="w-[68%] sm:w-[390px] md:w-[440px] h-9 sm:h-10 md:h-11 rounded-full bg-[#cbcfd8] mt-3 sm:mt-4" />

          {/* Subtitle Line 1 */}
          <div className="w-[78%] sm:w-[460px] md:w-[520px] h-3 sm:h-3.5 rounded-full bg-[#484e5b] mt-6 sm:mt-7" />

          {/* Subtitle Line 2 */}
          <div className="w-[56%] sm:w-[330px] md:w-[370px] h-3 sm:h-3.5 rounded-full bg-[#484e5b] mt-2.5 sm:mt-3" />

          {/* CTA Action Buttons Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-9">
            {/* Primary Solid Button */}
            <div className="w-34 sm:w-38 md:w-[160px] h-10.5 sm:h-11 md:h-[48px] rounded-xl bg-[#bcc0cb]" />

            {/* Secondary Outlined Button with Calendar */}
            <div className="w-34 sm:w-38 md:w-[160px] h-10.5 sm:h-11 md:h-[48px] rounded-xl border border-[#333744] bg-[#101217] flex items-center justify-center gap-2.5 sm:gap-3 px-3.5">
              {/* Wireframe Calendar Icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#525866] shrink-0"
              >
                <rect
                  x="2"
                  y="3.5"
                  width="12"
                  height="10.5"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="2"
                  y1="6.5"
                  x2="14"
                  y2="6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="4.5"
                  y1="2"
                  x2="4.5"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line
                  x1="11.5"
                  y1="2"
                  x2="11.5"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="5.5" cy="9.5" r="0.8" fill="currentColor" />
                <circle cx="8" cy="9.5" r="0.8" fill="currentColor" />
                <circle cx="10.5" cy="9.5" r="0.8" fill="currentColor" />
              </svg>

              {/* Pill next to calendar */}
              <div className="w-16 sm:w-18 md:w-20 h-2.5 sm:h-3 rounded-full bg-[#484e5b]" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===================== Bottom Elements (Slide-fades from below: y: 72 over 2.8s) ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        animate={{ opacity: 1, y: 0 }}
        transition={bottomTransition}
        className="w-full relative flex items-end justify-center pointer-events-none z-10"
      >
        {/* Left Flanking Angled UI Card */}
        <div className="absolute bottom-0 left-0 w-36 sm:w-48 md:w-64 lg:w-72 h-20 sm:h-24 md:h-28 pointer-events-none">
          <div className="w-full h-full relative">
            <div className="absolute top-2 left-0 w-20 sm:w-28 h-[1px] bg-[#272b35]" />
            <div className="absolute bottom-0 left-0 w-full h-[88%] bg-[#101115] border-t border-r border-[#272b35] rounded-tr-2xl" />
          </div>
        </div>

        {/* Center Main Dashboard Peek Window */}
        <div className="w-[90%] sm:w-[80%] md:w-[680px] lg:w-[740px] h-[120px] sm:h-[150px] md:h-[180px] rounded-t-2xl sm:rounded-t-3xl border-t border-x border-[#2c303a] bg-[#0c0d10] p-2.5 sm:p-3 md:p-3.5 relative z-20 shadow-2xl">
          <div className="w-full h-full rounded-t-xl sm:rounded-t-2xl border-t border-x border-[#20232b] bg-[#121419] p-2.5 sm:p-3 flex flex-col gap-2.5 sm:gap-3">
            {/* Inner Dashboard Header */}
            <div className="flex items-center justify-between w-full px-1">
              {/* Left: Circle + Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#5b6170]" />
                <div className="w-10 sm:w-13 h-1.5 sm:h-2 rounded-full bg-[#363a45]" />
              </div>

              {/* Center: 4 Tab Pills */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 sm:w-7 md:w-8 h-1.5 sm:h-2 rounded-full bg-[#363a45]" />
                <div className="w-6 sm:w-7 md:w-8 h-1.5 sm:h-2 rounded-full bg-[#363a45]" />
                <div className="w-6 sm:w-7 md:w-8 h-1.5 sm:h-2 rounded-full bg-[#363a45]" />
                <div className="w-6 sm:w-7 md:w-8 h-1.5 sm:h-2 rounded-full bg-[#363a45]" />
              </div>

              {/* Right: Small Button Pill */}
              <div className="w-8 sm:w-9 md:w-10 h-3.5 sm:h-4 rounded-md bg-[#5b6170]" />
            </div>

            {/* Inner Dashboard Content Surface */}
            <div className="w-full flex-1 rounded-t-lg bg-[#181a21] border-t border-x border-[#232630] p-2.5 sm:p-3 overflow-hidden">
              <div className="w-20 sm:w-26 md:w-32 h-12 sm:h-14 rounded-md bg-[#22252f]" />
            </div>
          </div>
        </div>

        {/* Right Flanking Angled UI Card */}
        <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-64 lg:w-72 h-20 sm:h-24 md:h-28 pointer-events-none">
          <div className="w-full h-full relative">
            <div className="absolute top-2 right-0 w-20 sm:w-28 h-[1px] bg-[#272b35]" />
            <div className="absolute bottom-0 right-0 w-full h-[88%] bg-[#101115] border-t border-l border-[#272b35] rounded-tl-2xl" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
