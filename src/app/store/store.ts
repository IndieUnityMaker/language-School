import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { telegramReducer } from '../../features/telegram/model/telegramSlice';

// Импортируем другие редюсеры по мере их создания

export const store = configureStore({
  reducer: {
    telegram: telegramReducer,
    // Здесь будут добавляться другие редюсеры
    // auth: authReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Игнорируем эти поля в actions, так как они могут содержать несериализуемые данные
      ignoredActionPaths: ['payload.webApp'],
      ignoredPaths: ['telegram.webApp']
    }
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();