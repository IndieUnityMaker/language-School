import { useMemo } from "react";
import st from "./GameProgress.module.css";

export type ProgressStatuses = "default" | "complete" | "error";

type GameProgressProps = {
    statuses: ProgressStatuses[];
};

const styleByStatus = {
    default: `${st.progress_item}`,
    complete: `${st.progress_item} ${st.complete}`,
    error: `${st.progress_item} ${st.error}`,
} as const;

export const GameProgress = ({ statuses }: GameProgressProps) => {
    const progressItems = useMemo(() => {
        return statuses.map((status, id) => (
            <div key={id} className={styleByStatus[status]}></div>
        ));
    }, [statuses]);

    return <div className={st.game_progress}>{progressItems}</div>;
};
