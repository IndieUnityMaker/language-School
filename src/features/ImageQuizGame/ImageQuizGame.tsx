import { PageGame } from "../../widgets/page-game/PageGame";
import st from "./ImageQuizGame.module.css";
import { GameProgress } from "../../shared/ui/game-progress/GameProgress";
import { QuizImage } from "../../shared/ui/quiz-image/QuizImage";
//import lemon from "../../assets/fruits/lemon.png";
import { useGameStatuses } from "../../shared/hooks/useGameStatuses";
import { useEffect, useState } from "react";
import type { ImageLesson } from "../../shared/types/lesson-type";
import { getImageQuizLesson } from "../../shared/api/facke/fackeApi";
import { Loader } from "../../shared/ui/loader/Loader";
import { useParams } from "react-router-dom";
import { AnswerOption } from "../../shared/ui/answers-list/AnswerOption";

export const ImageQuizGame = () => {
    const { statuses, setStatus } = useGameStatuses(12);
    const [lesson, setLesson] = useState<ImageLesson>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const { id } = useParams();

    useEffect(() => {
        getImageQuizLesson(id as string).then((data) => {
            setLesson(data as ImageLesson);
        });
    }, [id]);

    if (!lesson) {
        return (
            <PageGame>
                <Loader />
            </PageGame>
        );
    }

    const currentQuestion = lesson.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === lesson.questions.length - 1;

    const handleAnswer = (answerText: string) => {
        if (selectedAnswer) return; // Запрет на повторный выбор

        setSelectedAnswer(answerText);

        // Определяем статус ответа
        const isCorrect = answerText === currentQuestion.correctAnswer.text;
        setStatus(currentQuestionIndex, isCorrect ? "complete" : "error");

        // Переход к следующему вопросу или завершение
        setTimeout(() => {
            if (!isLastQuestion) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                // Здесь можно добавить логику завершения игры
                console.log("Игра завершена!");
            }
        }, 800); // Задержка для анимации
    };

    console.log(lesson);

    return (
        <PageGame>
            <div className={st.container}>
                <div className={st.header_quiz}>
                    <QuizImage
                        img={currentQuestion.image as string}
                        name={currentQuestion.correctAnswer.translation}
                    />
                    <GameProgress statuses={statuses} />
                </div>
                <div className={st.footer_quiz}>
                    <div className={st.quiz_answers}>
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedAnswer === option.text;
                            const isCorrectOption =
                                option.text ===
                                currentQuestion.correctAnswer.text;
                            const answerStatus = selectedAnswer
                                ? isCorrectOption
                                    ? st.yes
                                    : isSelected
                                    ? st.error
                                    : ""
                                : "";

                            return (
                                <AnswerOption
                                    key={option.text}
                                    className={`${st.quiz_answer} ${answerStatus}`}
                                    onClick={() => handleAnswer(option.text)}
                                    text={option.text}
                                    transcription={option.transcription}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </PageGame>
    );
};
