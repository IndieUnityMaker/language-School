import { Outlet } from "react-router-dom";
import { HeaderGame } from "../widgets/header-game/HeaderGame";

export const GamesLayout = () => {
    return (
        <>
            <HeaderGame />
            <Outlet />
        </>
    );
};
