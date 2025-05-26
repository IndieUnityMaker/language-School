import { createBrowserRouter } from "react-router-dom";
import { ImageQuizPage } from "../../pages/image-quiz-page/ImageQuizPage";
import { SelectLevelLayout } from "../../pages/SelectLevelLayout";
import { WordPuzzlePage } from "../../pages/word-puzzle-page/WordPuzzlePage";
import { Routes } from "../../shared/Routes";
import { ImageQuizGame } from "../../features/ImageQuizGame/ImageQuizGame";
import { GamesLayout } from "../../pages/GamesLayout";
import { WordPuzzleGame } from "../../features/WordPuzzleGame/WordPuzzleGame";

export const router = createBrowserRouter([
    {
        path: Routes.Main,
        element: <SelectLevelLayout />,
        children: [
            {
                index: true,
                element: <ImageQuizPage />,
            },
            {
                path: Routes.ImageQuiz,
                element: <ImageQuizPage />,
            },
            {
                path: Routes.WordPuzzle,
                element: <WordPuzzlePage />,
            },
        ],
    },
    {
        path: Routes.ImageQuizGameId,
        element: <GamesLayout />,
        children: [
            {
                index: true,
                element: <ImageQuizGame />,
            },
        ],
    },
    {
        path: Routes.WordPuzzleGameId,
        element: <GamesLayout />,
        children: [
            {
                index: true,
                element: <WordPuzzleGame />,
            },
        ],
    },
    {
        path: Routes.NotFound,
        element: <div>Not Found</div>,
    },
]);
