import CartIcon from "@/lib/svg/CartIcon";
import { Link } from "@/navigation";

export default function LargeScreenNavList() {
  return (
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cart"></Link>
          <span className="absolute w-4 h-4 rounded-full z-10 right-[8px] top-[-4px] flex items-center justify-center text-[10px] text-white bg-red-600">
            0
          </span>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}
