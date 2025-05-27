import { Livvic } from "next/font/google";
import "./globals.css";
import "./colors.css";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vikingeskibsmuseet",
  description: "Developed by Katinka and design by Mathilde & Fie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={livvic.className}>{children}</body>
    </html>
  );
}
