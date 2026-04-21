import { StyleSheet, Text, View, FlatList } from "react-native";
import { ItemTarefa } from "../components/ItemTarefa/itemTarefa.jsx";
import { BotaoAcao } from "../components/botaoAcao/botaoAcao.jsx";
import { IconeLapis } from "../components/icons/icons.jsx";
import useContextoTarefa from "../components/context/useTaskProvider";

export default function Index() {

  const { tarefas } = useContextoTarefa();

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Página para listar tarefas</Text>
      <View style={estilos.listaTarefas}>
          <FlatList
          data={tarefas}
          renderItem={({tarefa}) => <ItemTarefa tituloTarefa={tarefa.descricao} completada={tarefa.completada} />}
          keyExtractor={tarefa => tarefa.id}
          />
      </View>
      <BotaoAcao acao={'Adicionar tarefa'} icone={<IconeLapis/>}  />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
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
  }
})