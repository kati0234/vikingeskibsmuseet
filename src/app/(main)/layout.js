import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import HeaderMain from "../componets/layouts/museeum-flow/Header-main";
import FooterMain from "../componets/layouts/museeum-flow/Footer-main";

export const metadata = {
  title: "Vikingeskibsmuseet",
  description: "Developed by Katinka and design by Mathilde & Fie",
};

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </>
  );
}
