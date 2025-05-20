import HeaderMain from "../componets/layouts/museeum-flow/Header-main";
import FooterMain from "../componets/layouts/museeum-flow/Footer-main";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </>
  );
}
