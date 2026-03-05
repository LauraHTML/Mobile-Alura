import { Text, StyleSheet, Pressable } from "react-native";

export const BotaoFoco = ({timer, setTimer, tipoTimer}) => {
    return(
        <Pressable key={timer.id} style={tipoTimer.id === timer.id ? estilos.tabsButtonActive : null} onPress={() => setTimer(timer)}>
              <Text style={estilos.tabsText}>{timer.display}</Text>
            </Pressable>
    )
}

const estilos = StyleSheet.create({
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