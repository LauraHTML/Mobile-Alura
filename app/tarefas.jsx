import { StyleSheet, Text, View } from "react-native";
import { ItemTarefa } from "../components/ItemTarefa/itemTarefa.jsx";
import { BotaoAcao } from "../components/botaoAcao/botaoAcao.jsx";
import { IconeLapis } from "../components/icons/icons.jsx";

export default function Index() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Página para listar tarefas</Text>
      <View style={estilos.listaTarefas}>
        <ItemTarefa completada={true} tituloTarefa={"Estudar react native"} />
        <ItemTarefa tituloTarefa={"Aprender LOP"} />
        <ItemTarefa tituloTarefa={"Aprender react"} />
      </View>
      <BotaoAcao acao={'Adicionar tarefa'} icone={<IconeLapis/>}  />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b1108",
    gap: 20,
  },
  texto:{
    color: "white",
    textAlign: "center",
    fontSize: 26,
  },
  listaTarefas:{
    fontSize: 20,
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