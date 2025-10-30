export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hi, I’m Fidan.</h1>
      <p className="mt-2 text-zinc-600">Home page is working 🚀</p>
      <ul className="mt-6 list-disc pl-6">
        <li><a className="underline" href="/about">About</a></li>
        <li><a className="underline" href="/projects">Projects</a></li>
      </ul>
    </main>
  );
}
