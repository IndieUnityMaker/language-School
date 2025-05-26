import st from "./QuizLetters.module.css";

type QuizLettersType = {
    letters: string[];
    onClick: (letter: string) => void;
};

export const QuizLetters = ({ letters, onClick }: QuizLettersType) => {
    return (
        <div className={st.quiz_letters}>
            {letters.map((item, idx) => (
                <div
                    onClick={() => onClick(item)}
                    key={idx}
                    className={st.quiz_letter}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
