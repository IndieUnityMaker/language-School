import st from "./Page.module.css";

type PageProps = {
    children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
    return <div className={st.page}>{children}</div>;
};
