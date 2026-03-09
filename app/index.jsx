import { useRef, useState } from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { BotaoAcao } from "../components/botaoAcao/botaoAcao.jsx";
import { BotaoFoco } from "../components/botaoFoco/botaoFoco.jsx";
import { Timer } from "../components/timer/timer.jsx";
import { IconPause, IconPlay } from "../components/icons/icons.jsx";

const pomodoro = [
  {
    id: 'foco',
    valorInicial: 25 * 60,
    imagem: require("./tomate.jpg"),
    display: 'Foco'
  },
  {
    id: 'curto',
    valorInicial: 5 * 60,
    imagem: require("./curto.jpg"),
    display: 'Pausa curta'
  },
  {
    id: 'longo',
    valorInicial: 15 * 60,
    imagem: require("./longo.jpg"),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [tipoTimer, setTipoTimer] = useState(pomodoro[0])
  const [timerRodando, setTimerRodando] = useState(false)
  const [segundos, setSegundos] = useState(pomodoro[0].valorInicial)

  const timerRef = useRef(null)

  const limpar = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRodando(false)
    }
  }

  const toggleTipoTimer = (novoTipoTimer) => {
    setTipoTimer(novoTipoTimer);
    setSegundos(novoTipoTimer.valorInicial)
    limpar()
  }

  const toggleTimer = () => {

    if (timerRef.current) {
      //pausar
      limpar()
      return
    }

    setTimerRodando(true)

    const id = setInterval(() => {
       setSegundos(estadoAntigo => {
        if (estadoAntigo === 0) {
          limpar();
          return tipoTimer.valorInicial;
        }
        return estadoAntigo - 1;
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View style={estilos.container}>
      <Image style={estilos.imagem} source={tipoTimer.imagem} />

      <View style={estilos.actions}>
        {/* tabs */}
        <View style={estilos.tabs}>
          {pomodoro.map((timer) => (
            <BotaoFoco key={timer.id} timer={timer} onPress={() => toggleTipoTimer(timer)} tipoTimer={tipoTimer} ativo={ tipoTimer.id === timer.id } />
          ))}
        </View>

        <Timer tempo={segundos} />
        <BotaoAcao acao={timerRodando ? 'Pausar' : 'Iniciar'} onPress={toggleTimer} icone={timerRodando ? <IconPause /> : <IconPlay />} />
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