import { useState } from "react";

import { Text, View, StyleSheet, Image, Pressable } from "react-native";

//componentes
import { BotaoFoco } from "../components/botaoFoco/botaoFoco"

const pomodoro = [
  {
    id: 'foco',
    valorInicial: '25',
    imagem: require("./tomate.jpg"),
    display: 'Foco'
  },
  {
    id: 'curto',
    valorInicial: '5',
    imagem: require("./curto.jpg"),
    display: 'Pausa curta'
  },
  {
    id: 'longo',
    valorInicial: '15',
    imagem: require("./longo.jpg"),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [tipoTimer, setTipoTimer] = useState(pomodoro[0])

  return (
    <View style={estilos.container}>
      <Image style={estilos.imagem} source={tipoTimer.imagem} />

      <View style={estilos.actions}>
        {/* tabs */}
        <View style={estilos.tabs}>
          {pomodoro.map((timer) => (
            <BotaoFoco key={timer.id} timer={timer} setTimer={setTipoTimer} tipoTimer={tipoTimer} />
          ))}
        </View>

        <Text style={estilos.timer}>
          {new Date(tipoTimer.valorInicial * 1000).toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' })}
        </Text>
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
    color: "#2b1108",
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
  tabs: {
    flexDirection: "row",
    gap: 10
  },
  tabsText: {
    padding: 8,
    color: "#2b1108"
  },
  tabsButtonActive: {
    backgroundColor: "#f59e0b",
    borderRadius: 8,
    fontWeight: 'bold',
  }
})