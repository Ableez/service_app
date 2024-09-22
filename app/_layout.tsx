import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { TamaguiProvider } from "tamagui";
import { useColorScheme } from "@/hooks/useColorScheme";
import { tamaguiConfig } from "../tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TRPCReactProvider } from "@/trpc/react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TRPCReactProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
              <Stack.Screen
                name="service/[serviceId]"
                options={{
                  headerShown: false,
                  animation: "slide_from_right",
                  customAnimationOnGesture: true,
                  animationDuration: 1000,
                }}
              />
            </Stack>
          </ThemeProvider>
        </TamaguiProvider>
      </GestureHandlerRootView>
    </TRPCReactProvider>
  );
}
