import { useAuthStore } from "@/store/authStore";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import SafeScreen from "../component/SafeScreen";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token } = useAuthStore();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Check authentication status once when component mounts
  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
      setIsAuthChecked(true);
    };
    
    verifyAuth();
  }, []);

  // Handle navigation based on auth status
  useEffect(() => {
    if (!isAuthChecked) return; // Wait until auth check is complete
    const inAuthGroup = segments[0] === "(auth)";
    const isSignedIn = Boolean(user && token);
    
    console.log("Navigation check:", { 
      isAuthChecked, 
      isSignedIn, 
      inAuthGroup, 
      segments,
      user,
      token
    });

    if (isSignedIn && inAuthGroup) {
      console.log("Redirecting authenticated user to tabs");
      router.replace("/(tabs)");
    } else if (!isSignedIn && !inAuthGroup) {
      console.log("Redirecting unauthenticated user to auth");
      router.replace("/(auth)");
    }
  }, [isAuthChecked, segments, user, token]);

  // Show loading state while checking authentication
  if (!isAuthChecked) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider >
      <StatusBar style="auto" />
      <SafeScreen>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  );
}