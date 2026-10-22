"use client";

import { useEffect } from "react";

let activeLocksCount = 0;
let originalOverflow = "";
let originalPaddingRight = "";

export function useScrollLock(lock: boolean = true) {
  useEffect(() => {
    if (!lock) return;
    if (typeof document === "undefined") return;

    if (activeLocksCount === 0) {
      originalOverflow = document.body.style.overflow;
      originalPaddingRight = document.body.style.paddingRight;

      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    activeLocksCount += 1;

    return () => {
      activeLocksCount = Math.max(0, activeLocksCount - 1);

      if (activeLocksCount === 0) {
        document.body.style.overflow = originalOverflow || "";
        document.body.style.paddingRight = originalPaddingRight || "";
        originalOverflow = "";
        originalPaddingRight = "";
      }
    };
  }, [lock]);
}
