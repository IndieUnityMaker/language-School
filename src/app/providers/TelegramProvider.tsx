import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useAppDispatch } from "../store/store";
import {
    setExpanded,
    setPlatform,
    setTheme,
    setUserData,
} from "../../features/telegram/model/telegramSlice";

export const TelegramProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Инициализация данных в Redux
        dispatch(setUserData(WebApp.initDataUnsafe?.user || null));
        dispatch(setTheme(WebApp.colorScheme));
        dispatch(setPlatform(WebApp.platform));
        dispatch(setExpanded(WebApp.isExpanded));

        // Подписка на события
        const handleThemeChange = () => dispatch(setTheme(WebApp.colorScheme));
        const handleViewportChange = () =>
            dispatch(setExpanded(WebApp.isExpanded));

        WebApp.onEvent("themeChanged", handleThemeChange);
        WebApp.onEvent("viewportChanged", handleViewportChange);

        // Развернуть приложение и показать интерфейс
        WebApp.expand();
        WebApp.ready();

        return () => {
            WebApp.offEvent("themeChanged", handleThemeChange);
            WebApp.offEvent("viewportChanged", handleViewportChange);
        };
    }, [dispatch]);

    return <>{children}</>;
};
