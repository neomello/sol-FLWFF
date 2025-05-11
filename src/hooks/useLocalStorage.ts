import { useState, useEffect } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export function useStateOrLocalStorage(
  key: string | undefined,
  initialState: string
): [string, (val: string) => void] {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!key) return;

    const storedValue = window.localStorage.getItem(key);
    if (storedValue != null) setState(storedValue);

    const onStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        const updated = window.localStorage.getItem(key);
        setState(updated ?? initialState);
      }
    };

    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, [key, initialState]);

  const setStorage = (val: string) => {
    setState(val);
    if (!key || typeof window === "undefined") return;
    window.localStorage.setItem(key, val);
    // emitir "fake" event só se quiser sync entre tabs
  };

  return [state, setStorage];
}
