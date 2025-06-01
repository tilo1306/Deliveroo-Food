import { SplashScreen, Stack } from "expo-router"

export const unstable_settings = {
  initialRouteName: "index",
}

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  )
}
