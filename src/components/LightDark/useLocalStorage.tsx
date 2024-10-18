import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useLocalStorage = (
  key: "theme",
  defaultVal: "dark" | "light"
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) || defaultVal)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
