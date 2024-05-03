import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 bg-black border-b-amber-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-amber-400"
        >
          MernEats.com
        </Link>
        <div className="md:hidden text-amber-400">
          <MobileNav />
        </div>
        <div className="hidden md:block text-amber-400">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;