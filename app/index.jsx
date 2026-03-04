import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.imagem} source={require("./tomate.jpg")} />
      <View style={estilos.actions}>
      <Text style={estilos.timer}>25:00</Text>
      </View>
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
  timer:{
    color: "#e5d9cf",
    fontSize: 54,
    fontWeight: 'bold'
  },
  imagem: {
    width: 200,
    height: 200,
  },
  actions: {
    padding: 24,
    backgroundColor: "#db5226",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#f59e0b",
  }
})