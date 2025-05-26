import React from "react";
import st from "./QuizImage.module.css";

type QuizImageProps = {
    img: string;
    name: string;
};

export const QuizImage = React.memo(({ img, name }: QuizImageProps) => {
    return (
        <div className={st.quiz_image}>
            <img src={img} alt="game image" />
            <p>{name}</p>
        </div>
    );
});

QuizImage.displayName = "QuizImage";
