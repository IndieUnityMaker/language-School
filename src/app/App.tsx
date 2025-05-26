import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./providers/storeProvider";
import { TelegramProvider } from "./providers/TelegramProvider";
import { router } from "./providers/RouterProvider";

function App() {
    return (
        <StoreProvider>
            <TelegramProvider>
                <RouterProvider router={router} />
            </TelegramProvider>
        </StoreProvider>
    );
}

export default App;
