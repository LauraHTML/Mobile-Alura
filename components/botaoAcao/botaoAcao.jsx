import { Text, StyleSheet, Pressable } from "react-native";

export const BotaoAcao = ({ativo, onPress, display}) => {
    return(
         <Pressable style={estilos.button} onPress={onPress}>
          <Text style={estilos.textButton}>{display}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
  button: {
    backgroundColor: "#f59e0b",
    borderRadius: 32,
    padding: 8
  },
  buttonActive: {
    backgroundColor: "#2b1108",
    color: "#f59e0b",
    borderRadius: 32,
    padding: 8
  },
  textButton: {
    color: "#2b1108",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  }
})