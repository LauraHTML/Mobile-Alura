import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.imagem} source={require("./tomate.jpg")} />

      <View style={estilos.actions}>
        {/* tabs */}
        <View>
          <Pressable>
            <Text>Foco</Text>
          </Pressable>

          <Pressable>
            <Text>Pausa curta</Text>
          </Pressable>
        </View>

        <Pressable>
            <Text>Pausa longa</Text>
          </Pressable>
        <Text style={estilos.timer}>25:00</Text>
        <Pressable style={estilos.button}>
          <Text style={estilos.textButton}>Iniciar</Text>
        </Pressable>
      </View>

      <View>
        <Text style={estilos.footerText}>
          Projeto fictício e sem fins comerciais
        </Text>
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
  timer: {
    color: "#e5d9cf",
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: "center"
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
  },
  button: {
    backgroundColor: "#f59e0b",
    borderRadius: 32,
    padding: 8
  },
  textButton: {
    color: "#2b1108",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    color: "#e5d9cf",
    fontSize: 12.5,
  },
  // tabs
  tabs:{
    
  }
})