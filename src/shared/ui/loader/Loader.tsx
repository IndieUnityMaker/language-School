import st from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={`${st.loader_container}`}>
            <div className={`${st.loader}`}></div>
        </div>
    );
};
