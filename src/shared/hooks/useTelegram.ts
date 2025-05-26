import { useMemo } from 'react';
import WebApp from '@twa-dev/sdk';

export const useTelegram = () => {
  const webApp = useMemo(() => WebApp, []);

  return {
    webApp,
    user: webApp.initDataUnsafe?.user,
    themeParams: webApp.themeParams,
    sendData: webApp.sendData,
    close: webApp.close,
  };
};