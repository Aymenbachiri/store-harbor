import WorldIcon from "@/lib/svg/WorldIcon";
import { Arabic, English, French } from "../ChangeLanguageOptions";

export default function MobileLangSwitcher() {
  return (
    <ul>
      <li>
        <details>
          <summary>
            <WorldIcon />
          </summary>
          <ul className="p-2">
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
        </details>
      </li>
    </ul>
  );
}
