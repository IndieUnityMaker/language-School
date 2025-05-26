import st from "./MapHeader.module.css";

type MapHeaderProps = {
    name: string;
    info: string;
};

export const MapHeader = ({ name, info }: MapHeaderProps) => {
    return (
        <div className={st.mapHead}>
            <div className={st.mapHead_info}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
            <div className={st.mapHead_actionContainer}>
                <div className={st.mapHead_action}>
                    <img src="src/assets/icons/info-icon.png" alt="info icon" />
                </div>
            </div>
        </div>
    );
};
