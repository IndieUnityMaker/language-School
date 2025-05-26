import { Outlet } from "react-router-dom";
import { BottomNav } from "../widgets/bottom-nav/BottomNav";
import { HeaderMain } from "../widgets/header-main/HeaderMain";

export const SelectLevelLayout = () => {
    return (
        <>
            <HeaderMain />
            <Outlet />
            <BottomNav />
        </>
    );
};
