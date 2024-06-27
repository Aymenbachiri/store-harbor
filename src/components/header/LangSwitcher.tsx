import WorldIcon from "@/lib/svg/WorldIcon";
import { Arabic, English, French } from "../ChangeLanguageOptions";

export default function LangSwitcher() {
  return (
    <main className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="m-1">
        <WorldIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Arabic />
        </li>
        <li>
          <English />
        </li>
        <li>
          <French />
        </li>
      </ul>
    </main>
  );
}
