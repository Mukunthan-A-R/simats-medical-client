import React from "react";

export default function UnderConstruction({
  title = "Page Under Construction",
  subtitle = "We're building something awesome — check back soon!",
  onBack,
  mailTo = "support@example.com",
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Illustration */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden">
            {/* Floating gear group */}
            <svg
              className="absolute -left-6 -top-6 w-28 h-28 text-gray-100 opacity-80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className="transform-gpu animate-[spin_6s_linear_infinite]"
                transform-origin="50% 50%"
                fill="currentColor"
              >
                <path d="M50 35a15 15 0 100 30 15 15 0 000-30zm0-7.5l3.7-8.6 7.1 2.8 2.8 7.1L67.5 30l-3.7 8.6-7.1-2.8L53.7 30z" />
              </g>
            </svg>

            {/* Construction character (simple friendly robot/vehicle) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-28 h-28 rounded-xl bg-yellow-100 flex items-center justify-center border border-yellow-200 shadow-inner">
                {/* Hardhat */}
                <div className="relative">
                  <div className="w-20 h-10 bg-yellow-400 rounded-t-full shadow-sm transform translate-y-2 animate-bounce-slow" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-700 font-medium">
                    <span style={{ fontSize: 20 }}>⚙️</span>
                  </div>
                </div>
              </div>

              {/* Small toolbox */}
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm">
                  🔧
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                  🧰
                </div>
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shadow-sm">
                  🪛
                </div>
              </div>
            </div>

            {/* Subtle glossy overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30 mix-blend-screen" />
          </div>
        </div>

        {/* Right: Text + actions */}
        <div className="flex flex-col justify-center">
          <div className="px-4 py-6 sm:px-6 sm:py-8 bg-white">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl">
              {subtitle}
            </p>

            {/* Features / ETA chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 text-xs font-medium border border-purple-100 shadow-sm">
                🚧 Feature: New Prescriptions UI
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-medium border border-blue-100 shadow-sm">
                ⏳ ETA: Q4
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-green-100 text-green-700 text-xs font-medium border border-green-100 shadow-sm">
                ✨ Live Preview Coming
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => (onBack ? onBack() : window.history.back())}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-medium shadow hover:scale-[1.02] active:scale-95 transition-transform"
              >
                ← Go back
              </button>

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-sm font-semibold text-white shadow hover:brightness-95 active:scale-95 transition"
              >
                🔄 Refresh
              </button>
            </div>
          </div>

          {/* Footer thin accent */}
          <div className="mt-4 px-4">
            <div className="w-full h-1 rounded-full bg-gradient-to-r from-purple-300 via-blue-200 to-green-200 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
