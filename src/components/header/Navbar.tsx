import { Link } from "@/navigation";
import MobileNavList from "./MobileNavList";
import LargeScreenNavList from "./LargeScreenNavList";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <header className="container mx-auto">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <MobileNavList />
          <Link className="btn btn-ghost text-xl" href="/">
            home
          </Link>
        </div>
        <LargeScreenNavList />
        <ThemeSwitch />
      </nav>
    </header>
  );
}
