import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { FamiljenGrotesk_400Regular } from "@expo-google-fonts/familjen-grotesk";

import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  let [fontsLoaded] = useFonts({
    FamiljenGrotesk_400Regular
  });

  return (
    <View style={estilos.container}>
      <View style={estilos.containerIndex}>
        <Text>Bem-vindo</Text>
        <Image style={estilos.imagem} source={require("../assets/images/foco.png")} />
        <Text>Começar nova seção de estudo</Text>
        <Link style={estilos.link} href={{ pathname: "/pomodoro" }}>Começar</Link>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#80B7FF",
    gap: 10,
    color: "#e5d9cf",
  },
  containerIndex:{
    fontSize: 20,
    fontFamily: FamiljenGrotesk_400Regular,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    color: "#e5d9cf",
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#f59e0b",
  },
  link: {
    padding: 14,
    backgroundColor: "#f59e0b",
    color: "#e5d9cf",
    borderRadius: 32,
  }
})