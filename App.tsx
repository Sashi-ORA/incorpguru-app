import { View } from "react-native";

import { useFonts } from "expo-font";
import AppText from "./app/components/common/AppText";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "public-sans-regular": require("./app/assets/fonts/PublicSans-Regular.ttf"),
    "public-sans-medium": require("./app/assets/fonts/PublicSans-Medium.ttf"),
    "public-sans-semibold": require("./app/assets/fonts/PublicSans-SemiBold.ttf"),
    "public-sans-bold": require("./app/assets/fonts/PublicSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="flex flex-1 bg-slate-400 justify-center items-center">
      <AppText>Dummy Text</AppText>
    </View>
  );
}
