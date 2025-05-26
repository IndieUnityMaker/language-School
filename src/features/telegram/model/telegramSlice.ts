import { createSlice } from '@reduxjs/toolkit';
import WebApp from '@twa-dev/sdk';

interface TelegramState {
  user: {
    id: number;
    firstName?: string;
    lastName?: string;
    username?: string;
    isPremium?: boolean;
  } | null;
  theme: 'light' | 'dark';
  initData: string;
  platform: string;
  isExpanded: boolean;
}

const initialState: TelegramState = {
  user: WebApp.initDataUnsafe?.user ? {
    id: WebApp.initDataUnsafe.user.id,
    firstName: WebApp.initDataUnsafe.user.first_name,
    lastName: WebApp.initDataUnsafe.user.last_name,
    username: WebApp.initDataUnsafe.user.username,
    isPremium: WebApp.initDataUnsafe.user.is_premium,
  } : null,
  theme: WebApp.colorScheme,
  initData: WebApp.initData || '',
  platform: WebApp.platform || 'unknown',
  isExpanded: WebApp.isExpanded,
};

export const telegramSlice = createSlice({
  name: 'telegram',
  initialState,
  reducers: {
    setUserData(state, action) {
      if (action.payload) {
        state.user = {
          id: action.payload.id,
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          username: action.payload.username,
          isPremium: action.payload.is_premium,
        };
      } else {
        state.user = null;
      }
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setPlatform(state, action) {
      state.platform = action.payload;
    },
    setExpanded(state, action) {
      state.isExpanded = action.payload;
    },
  },
});

export const { setUserData, setTheme, setPlatform, setExpanded } = telegramSlice.actions;
export const telegramReducer = telegramSlice.reducer;