import { useCallback, useMemo, useState } from "react";
import type { ProgressStatuses } from "../ui/game-progress/GameProgress";


export const useGameStatuses = (length: number) => {

  const [statuses, setStatuses] = useState<ProgressStatuses[]>(() => {
    return Array(length).fill("default");
  });

  const setStatus = useCallback((index: number, status: ProgressStatuses) => {

    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = status;
      return newStatuses;
    });
  }, []);

  const memoizedStatuses = useMemo(() => statuses, [statuses]);

  return { statuses: memoizedStatuses, setStatus };
}