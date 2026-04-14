import { Text, StyleSheet, Pressable } from "react-native";

export const BotaoTarefa = ({onPress, icone}) => {
    return(
         <Pressable style={estilos.button} onPress={onPress}>
          {icone}
        </Pressable>
    )
}

const estilos = StyleSheet.create({
  button: {
    backgroundColor: "#f59e0b",
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonActive: {
    backgroundColor: "#2b1108",
    color: "#80B7FF",
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