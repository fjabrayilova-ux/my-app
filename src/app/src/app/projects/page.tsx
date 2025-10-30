import Link from "next/link";

const projects = [
  { slug: "tintype-affiliate", title: "Tintype Affiliate Flow", summary: "Signup + dashboard UX." },
  { slug: "blossom-therapy", title: "Blossom Therapy", summary: "Student-focused mental health app." },
  { slug: "car-auctions-ai", title: "AI Car Auctions", summary: "Dealer search & bid assistant." },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Click a project to view details (route-generated page).</p>

      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-md transition-shadow">
            <h2 className="font-medium">{p.title}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.summary}</p>
            <Link href={`/projects/${p.slug}`} className="text-sm mt-3 inline-block underline">
              View case study →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export { projects };
