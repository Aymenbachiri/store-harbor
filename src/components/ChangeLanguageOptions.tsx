"use client";

import { useChangeLanguage } from "@/lib/hooks/useChangeLanguage";
import AlgeriaFlag from "@/lib/svg/AlgeriaFlag";
import FranceFlag from "@/lib/svg/FranceFlag";
import UsaFlag from "@/lib/svg/UsaFlag";

export const Arabic = () => {
  const changeLanguage = useChangeLanguage();

  return (
    <a onClick={() => changeLanguage("ar")}>
      <AlgeriaFlag />
      Arabic
    </a>
  );
};

export const English = () => {
  const changeLanguage = useChangeLanguage();

  return (
    <a onClick={() => changeLanguage("en")}>
      <UsaFlag />
      English
    </a>
  );
};

export const French = () => {
  const changeLanguage = useChangeLanguage();

  return (
    <a onClick={() => changeLanguage("fr")}>
      <FranceFlag />
      French
    </a>
  );
};
