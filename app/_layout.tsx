import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(notabbar)/accountsettings"
        options={{
          headerTitle: "Account Settings",
          headerShown: true,
          headerBackTitle: "Go Back",
        }}
      />
    </Stack>
  );
}
