"use client";

import { useEffect, useRef, useState } from "react";

type Dot = { x: number; y: number; id: number };

export default function Play() {
  const [enabled, setEnabled] = useState(true);
  const [dots, setDots] = useState<Dot[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handler = (e: MouseEvent) => {
      idRef.current += 1;
      const id = idRef.current;
      const dot = { x: e.clientX, y: e.clientY, id };
      setDots((d) => [...d.slice(-80), dot]);
      setTimeout(() => {
        setDots((d) => d.filter((p) => p.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [enabled]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-2xl p-6">
        <h1 className="text-3xl font-semibold">Playground</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Move your mouse to draw a fading particle trail. Toggle it below.
        </p>

        <button
          onClick={() => setEnabled((v) => !v)}
          className="mt-6 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          {enabled ? "Disable" : "Enable"} trail
        </button>

        <p className="mt-3 text-sm text-zinc-500">Tip: Try fast swirls ✨</p>
      </div>

      <div className="pointer-events-none fixed inset-0">
        {dots.map((d) => (
          <span
            key={d.id}
            className="absolute h-3 w-3 rounded-full bg-zinc-900/60 dark:bg-white/70"
            style={{
              left: d.x - 6,
              top: d.y - 6,
              transform: "translate(-50%, -50%)",
              transition: "opacity 600ms, transform 600ms",
              animation: "pop 600ms forwards",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pop {
          0% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(0.2); }
        }
      `}</style>
    </main>
  );
}

