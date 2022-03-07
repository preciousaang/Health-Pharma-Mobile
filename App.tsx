import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import Welcome from "./screens/Welcome";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      // Add more variants
      // 700: {
      //   normal: "Roboto-Bold",
      // },
      // 800: {
      //   normal: "Roboto-Bold",
      //   italic: "Roboto-BoldItalic",
      // },
      // 900: {
      //   normal: "Roboto-Bold",
      //   italic: "Roboto-BoldItalic",
      // },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "SF-Pro": require("./assets/fonts/SF-Pro-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Welcome />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
