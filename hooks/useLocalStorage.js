import { useEffect, useState } from "react";

export function useLocalStorage(key) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setValue(JSON.parse(localStorage?.getItem(key)));
    }
  }, []);
  return { value };
}
