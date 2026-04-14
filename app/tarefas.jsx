import { Link } from "expo-router";

import { Image, StyleSheet, Text, View } from "react-native";
import { ItemTarefa } from "../components/ItemTarefa/itemTarefa.jsx";

export default function Index() {
  return (
    <View style={estilos.container}>
      <View>
        <Text>Página para listar tarefas</Text>
        <ItemTarefa tituloTarefa={"Estudar react native"} />
        <ItemTarefa tituloTarefa={"Aprender LOP"} />
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