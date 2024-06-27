import { Link } from "@/navigation";
import ThemeSwitch from "./ThemeSwitch";
import MobileLangSwitcher from "./MobileLangSwitcher";

export default function MobileNavList() {
  return (
    <main className="dark:text-white">
      <nav className="dropdown">
        <button
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
          aria-label="Open Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Our Projects</summary>
              <ul className="p-2">
                <li>
                  <Link href="/">option1</Link>
                </li>
                <li>
                  <Link href="/">option2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <ThemeSwitch />
          <MobileLangSwitcher />
        </ul>
      </nav>
    </main>
  );
}
