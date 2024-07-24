"use client";

import { useCallback } from "react";

const TriggerLoading = ({ loadMore }: { loadMore: () => void }) => {
  const TriggerRef = useCallback(
    (node) => {
      if (!node) return;

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
            observer.disconnect();
          }
        });
      });

      observer.observe(node);
    },
    [loadMore]
  );

  return <div ref={TriggerRef} className="h-1 w-1 bg-red-400"></div>;
};

export default TriggerLoading;
