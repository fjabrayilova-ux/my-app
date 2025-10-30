import "./globals.css";

export const metadata = {
  title: "Fidan's Next App",
  description: "A simple Next.js site built by Fidan Jabrayilova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
