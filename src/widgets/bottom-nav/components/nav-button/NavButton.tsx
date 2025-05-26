import st from "./NavButton.module.css";

type NavButtonProps = {
    text?: string;
    img?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
};

export const NavButton = ({ width, height, img, onClick }: NavButtonProps) => {
    return (
        <button
            className={st.nav_btn}
            onClick={onClick}
            style={{
                width: width,
                height: height,
            }}
        >
            <img src={img} alt="Button image" />
        </button>
    );
};
