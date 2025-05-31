import { GameProgress } from "../../shared/ui/game-progress/GameProgress";
import { QuizImage } from "../../shared/ui/quiz-image/QuizImage";
import { PageGame } from "../../widgets/page-game/PageGame";
import st from "./WordPuzzleGame.module.css";
import lemon from "../../assets/fruits/lemon.png";
import { useGameStatuses } from "../../shared/hooks/useGameStatuses";
import { QuizLetters } from "../../widgets/quiz-letters/QuizLetters";
import { QuizLetterContainer } from "../../widgets/quiz-letter-container/QuizLetterContainer";
import { useEffect, useState } from "react";
import type { WordLesson } from "../../shared/types/lesson-type";
import { useParams } from "react-router-dom";
import { getWordPuzzleLesson } from "../../shared/api/facke/fackeApi";
import { Loader } from "../../shared/ui/loader/Loader";

export const WordPuzzleGame = () => {
    const { statuses, setStatus } = useGameStatuses(12);
    const [lesson, setLesson] = useState<WordLesson>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [letters, setLetters] = useState<string[] | []>([]);
    const [isComplete, setIsComplete] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        getWordPuzzleLesson(id as string).then((data) => {
            setLesson(data);
        });
    }, [id]);

    useEffect(() => {
        const question = lesson?.questions[currentQuestionIndex];
        const word = question?.correctAnswer.text;

        const preloadLetters = new Array(word?.length).fill("");
        if (question?.prefilledId) {
            question?.prefilledId.forEach((item) => {
                preloadLetters[item] = word?.charAt(item);
            });
        }
        setLetters(preloadLetters);
    }, [currentQuestionIndex, lesson?.questions]);

    useEffect(() => {
        if (!isComplete) return;
        let timer: number;

        if (isComplete) {
            timer = setTimeout(() => {
                setIsComplete(false);
                setCurrentQuestionIndex((prev) => prev + 1);
            }, 700);
        }

        return () => clearTimeout(timer);
    }, [isComplete]);

    if (!lesson) {
        return (
            <PageGame>
                <Loader />
            </PageGame>
        );
    }

    const currentQuestion = lesson.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === lesson.questions.length - 1;

    const checkLettersComplete = (letters: string[]) => {
        const question = lesson?.questions[currentQuestionIndex];
        const correctWord = question?.correctAnswer.text;
        const completed = letters.every((letter) => letter !== "");

        if (completed) {
            const isCorrect = letters.join("") === correctWord;
            setStatus(currentQuestionIndex, isCorrect ? "complete" : "error");

            if (!isLastQuestion) {
                setIsComplete(true);
            } else {
                // Игра завершена
                console.log("Game completed!");
            }
        }
    };

    const handleLetterSelect = (letter: string) => {
        setLetters((prev) => {
            const question = lesson?.questions[currentQuestionIndex];
            const prefilledIndices = question?.prefilledId || [];

            const emptyIndex = prev.findIndex(
                (char, index) =>
                    char === "" && !prefilledIndices.includes(index)
            );
            if (emptyIndex === -1) return prev;

            const newLetters = [...prev];
            newLetters[emptyIndex] = letter;

            checkLettersComplete(newLetters);

            return newLetters;
        });
    };

    return (
        <PageGame>
            <div className={st.container}>
                <div className={st.header_quiz}>
                    <QuizImage
                        img={currentQuestion.image ?? ""}
                        name={currentQuestion.correctAnswer.translation}
                    />
                    <GameProgress statuses={statuses} />
                </div>
                <div className={st.main_quiz}>
                    <QuizLetterContainer letters={letters} />
                </div>
                <div className={st.footer_quiz}>
                    <QuizLetters
                        onClick={(letter) => handleLetterSelect(letter)}
                        letters={currentQuestion.letters}
                    />
                </div>
            </div>
        </PageGame>
    );
};
