import st from "./PageGame.module.css";

type PageGameProps = {
    children: React.ReactNode;
};

export const PageGame = ({ children }: PageGameProps) => {
    return <div className={st.page}>{children}</div>;
};
