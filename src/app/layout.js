import { Geist, Geist_Mono } from "next/font/google";
import { Livvic } from "next/font/google";
import "./globals.css";
import "./colors.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const livvic = Livvic({
  subsets: ["latin"], // eller ['latin-ext'] hvis du har brug for flere tegn
  weight: ["400", "700"], // vælg de vægte du vil bruge
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vikingeskibsmuseet",
  description: "Developed by Katinka and design by Mathilde & Fie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={livvic.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
