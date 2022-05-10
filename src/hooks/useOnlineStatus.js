import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnlineStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOnlineStatusChange);
    window.addEventListener("online", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("offline", handleOnlineStatusChange);
      window.removeEventListener("online", handleOnlineStatusChange);
    };
  });

  return isOnline;
};

export default useOnlineStatus;
