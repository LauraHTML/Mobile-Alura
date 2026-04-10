import { Link } from "expo-router";
import { useRef, useState } from "react";

import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (
    <View>
      <Text>Inicio</Text>
      <Link href={{pathname: "/pomodoro"}}>Quero iniciar</Link>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b1108",
    gap: 40,
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#f59e0b",
  },
  actions: {
    padding: 24,
    backgroundColor: "#80B7FF",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#f59e0b",
  },
  footerText: {
    textAlign: "center",
    color: "#e5d9cf",
    fontSize: 12.5,
  },
  // tabs
  tabs: {
    flexDirection: "row",
    gap: 10
  },
})