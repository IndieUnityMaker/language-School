import { useState, useEffect } from "react";
import st from "./QuizLetters.module.css";

type QuizLettersType = {
    letters: string[];
    onClick: (letter: string) => void;
};

export const QuizLetters = ({ letters, onClick }: QuizLettersType) => {
    const [renderLetters, setRenderLetters] = useState<string[]>(letters);

    useEffect(() => {
        setRenderLetters(letters);
    }, [letters]);

    const handleClick = (index: number, letter: string) => {
        onClick(letter);
        setRenderLetters((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className={st.quiz_letters}>
            {renderLetters.map((item, idx) => (
                <div
                    onClick={() => handleClick(idx, item)}
                    key={idx}
                    className={st.quiz_letter}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
