import type { Metadata } from "next";
import{JetBrains_Mono} from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-jetbrains-mono"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jetBrainsMono.className}>
        <main className="min-h-screen">
          {children}
        </main>
        {children}
      </body>
    </html>
  );
}
