import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Header />
      {showHero && <Hero />}
      <div className="container bg-stone-800 mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;