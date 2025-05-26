import { Link } from "react-router-dom";
import st from "./HeaderGame.module.css";
import { Routes } from "../../shared/Routes";

export const HeaderGame = () => {
    return (
        <div className={st.header_main}>
            <Link className={st.link} to={Routes.Main}>
                назад
            </Link>
        </div>
    );
};
