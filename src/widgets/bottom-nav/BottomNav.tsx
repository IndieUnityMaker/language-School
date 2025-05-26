import { useCustomNavigate } from "../../shared/hooks/useCustomNavigate";
import { Routes } from "../../shared/Routes";
import st from "./BottomNav.module.css";
import { NavButton } from "./components/nav-button/NavButton";

export const BottomNav = () => {
    const { to } = useCustomNavigate();

    return (
        <div className={st.bottom_nav}>
            <NavButton
                width="35px"
                height="45px"
                img="src/assets/icons/imageQuiz-icon.png"
                onClick={() => to(Routes.ImageQuiz)}
            />
            <NavButton
                width="35px"
                height="45px"
                img="src/assets/icons/wordGame-icon.png"
                onClick={() => to(Routes.WordPuzzle)}
            />
            <NavButton
                width="35px"
                height="45px"
                img="src/assets/icons/user-icon.png"
                onClick={() => to(Routes.Profile)}
            />
        </div>
    );
};
