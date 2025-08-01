import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const handleMediaQueryChange = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
      }, 300);
    };

    handleMediaQueryChange();
    window.addEventListener("resize", handleMediaQueryChange);

    const cleanup = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      window.removeEventListener("resize", handleMediaQueryChange);
    };

    return cleanup;
  }, []);

  return isMobile;
}
