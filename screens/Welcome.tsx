import { BlurView } from "expo-blur";
import {
  Text,
  Heading,
  VStack,
  Box,
  Image,
  Input,
  Spacer,
  Button,
} from "native-base";

import { StyleSheet } from "react-native";

import WelcomeBG from "../components/welcomeBG";
const logo = require("../assets/images/Logo.png");

export default function Welcome() {
  return (
    <>
      <WelcomeBG>
        <Box justifyContent="space-between" flex={1} pt={4} pb={8} safeArea>
          <Box ml={10}>
            <Image source={logo} size="md" mb={5} alt="Logo" />

            <Heading style={{ fontFamily: "SF-Pro" }} color="white">
              Bienvenue
            </Heading>
            <Spacer h={3} />
            <Heading style={{ fontFamily: "SF-Pro" }} color="white">
              chez Tiger Jewelry
            </Heading>
          </Box>
          <VStack px={10} space={4}>
            <BlurView intensity={150} style={{ borderRadius: 50 }}>
              <Button
                size="lg"
                p={4}
                variant="outline"
                colorScheme="light"
                borderColor="white"
                borderWidth={1}
                borderRadius="full"
                _text={{ color: "gray.500" }}
              >
                Connexion
              </Button>
            </BlurView>

            <Button
              size="lg"
              p={4}
              borderRadius="full"
              backgroundColor={"white"}
              _text={{ color: "#745F9A" }}
            >
              Inscription
            </Button>
            <Text color="white" underline textAlign={"center"} fontSize={"lg"}>
              Mot de passe oublié ?
            </Text>
          </VStack>
        </Box>
      </WelcomeBG>
    </>
  );
}
