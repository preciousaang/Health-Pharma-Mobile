import { ImageBackground, StyleSheet } from "react-native";
const loginBgImg = require("../assets/images/loginBg.png");

export default function WelcomeBG({ children }) {
  return (
    <>
      <ImageBackground
        style={styles.bgImg}
        source={loginBgImg}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    width: null,
    height: null,
  },
});
