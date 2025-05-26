import { useState } from "react";
import type { ProgressStatuses } from "../ui/game-progress/GameProgress";


export const useGameStatuses = (length: number) => {

  const [statuses, setStatuses] = useState<ProgressStatuses[]>(() => {
    return Array(length).fill("default");
  });

  const setStatus = (index: number, status: ProgressStatuses) => {
    console.log(status);
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = status;
      return newStatuses;
    });
  };

  return { statuses, setStatus }
}