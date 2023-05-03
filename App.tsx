import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import MainNavigation from './app/navigation/MainNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('./assets/fonts/Gilroy-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigation onLayout={onLayoutRootView} />;
}
