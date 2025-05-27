import HeaderMain from "../layouts/museeum-flow/Header-main";
import FooterMain from "../layouts/museeum-flow/Footer-main";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </>
  );
}
