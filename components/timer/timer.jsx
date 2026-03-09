import { Text, StyleSheet, Pressable } from "react-native";

export const Timer = ({tempo}) => {

    const minuto = new Date(tempo * 1000)
    const formato = { minute: '2-digit', second: '2-digit' }

    return(
         <Text style={estilos.timer}>
          {minuto.toLocaleTimeString('pt-br', formato)}
        </Text>
    )
}

const estilos = StyleSheet.create({
 timer: {
    color: "#2b1108",
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: "center"
  }
})