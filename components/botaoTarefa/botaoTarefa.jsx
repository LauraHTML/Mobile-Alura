import { StyleSheet, Pressable } from "react-native";

export const BotaoTarefa = ({onPress, icone, completada}) => {
  const estilosItemTarefa = [estilos.botao]

  if (completada){
    estilosItemTarefa.push(estilos.botaoTarefaCompletada)
  }

    return(
         <Pressable style={estilosItemTarefa} onPress={onPress}>
          {icone}
        </Pressable>
    )
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#f59e0b",
    borderRadius: 32,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoTarefaCompletada:{
    backgroundColor: "#80B7FF",
    borderRadius: 32,
    padding: 8,
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