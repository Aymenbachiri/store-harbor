import { Link } from "@/navigation";
import MobileNavList from "./MobileNavList";
import LargeScreenNavList from "./LargeScreenNavList";
import NavHeader from "./NavHeader";

export default function Navbar() {
  return (
    <NavHeader>
      <nav className="navbar container mx-auto">
        <div className="navbar-start md:ml-[30px] lg:ml-[150px]">
          <MobileNavList />
          <Link className="btn btn-ghost text-xl" href="/">
            home
          </Link>
        </div>
        <div className="navbar-end">
          <LargeScreenNavList />
        </div>
      </nav>
    </NavHeader>
  );
}
