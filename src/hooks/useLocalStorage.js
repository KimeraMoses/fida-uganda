import { useRef, useEffect, useState } from "react";

export const APP_PREFIX = "fida-ims-";

function useLocalStorage(
  key,
  initialValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const prefixedKey = `${APP_PREFIX}${key}`;

  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(prefixedKey);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  const prevKeyRef = useRef(prefixedKey);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey === prefixedKey) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = prefixedKey;
    window.localStorage.setItem(prefixedKey, serialize(state));
  }, [prefixedKey, serialize, state]);

  return [state, setState];
}

export default useLocalStorage;
