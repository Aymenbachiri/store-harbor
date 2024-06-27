import CartIcon from "@/lib/svg/CartIcon";
import { Link } from "@/navigation";
import ThemeSwitch from "./ThemeSwitch";
import LangSwitcher from "./LangSwitcher";

export default function LargeScreenNavList() {
  return (
    <div className="hidden lg:flex items-center lg:ml-[150px]">
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
          <Link href="/cart" className="relative">
            <span className="absolute w-4 h-4 rounded-full z-10 -right-2 -top-2 flex items-center justify-center text-[10px] text-white bg-red-600">
              0
            </span>
            <CartIcon />
          </Link>
        </li>
      </ul>
      <ThemeSwitch />
      <LangSwitcher />
    </div>
  );
}
