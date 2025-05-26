import st from "./QuizLetterContainer.module.css";

type QuizLetterContainerType = {
    letters: string[];
};

export const QuizLetterContainer = ({ letters }: QuizLetterContainerType) => {
    return (
        <div className={st.quiz_letter_container}>
            {letters.map((item, inx) => (
                <div key={inx} className={st.letter_container}>
                    {item}
                </div>
            ))}
        </div>
    );
};
