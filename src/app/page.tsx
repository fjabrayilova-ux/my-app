// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // tiny typewriter for fun ✨
  const lines = [
    "A product designer & developer.",
    "I care about clarity, motion, and craft.",
    "Scroll to see projects ↓",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % lines.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-zinc-200/70 dark:border-zinc-800">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
          <Link href="/" className="font-semibold tracking-tight">
            fjabrayilova
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <a href="https://nextjs.org" target="_blank" className="hover:underline">Next.js</a>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="row-start-2 mx-auto max-w-5xl w-full px-6 py-16">
        <section className="flex flex-col items-center sm:items-start gap-6">
          <p className="text-2xl sm:text-3xl">Hi, I’m <span className="font-semibold">Fidan</span>.</p>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 h-6">
            {lines[i]}
          </p>

          <div className="flex gap-3">
            <Link
              href="/projects"
              className="rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full px-5 py-2.5 text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Quick cards */}
        <section className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { title: "Accessible", desc: "Clear, honest UI." },
            { title: "Performant", desc: "Fast by default." },
            { title: "Delightful", desc: "Small motions, big feel." },
          ].map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 relative overflow-hidden
                         hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent via-zinc-100/60 to-transparent dark:via-zinc-800/40 transition-opacity" />
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{c.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer links from your original */}
        <footer className="mt-16 flex flex-wrap gap-6 text-sm">
          <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org/learn" target="_blank" rel="noreferrer">
            <Image aria-hidden src="/file.svg" alt="" width={16} height={16} /> Learn
          </a>
          <a className="flex items-center gap-2 hover:underline" href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noreferrer">
            <Image aria-hidden src="/window.svg" alt="" width={16} height={16} /> Examples
          </a>
          <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org" target="_blank" rel="noreferrer">
            <Image aria-hidden src="/globe.svg" alt="" width={16} height={16} /> nextjs.org →
          </a>
        </footer>
      </main>
    </div>
  );
}

