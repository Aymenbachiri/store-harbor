import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useChangeLanguage = () => {
  const router = useRouter();

  const changeLanguage = useCallback(
    (language: string) => {
      const newPath = `/${language}`;
      router.push(newPath);
    },
    [router]
  );

  return changeLanguage;
};
