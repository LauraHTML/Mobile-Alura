import { FlatList, StyleSheet, Text, View } from "react-native";
import { ItemTarefa } from "../components/ItemTarefa/itemTarefa.jsx";
import { BotaoAcao } from "../components/botaoAcao/botaoAcao.jsx";
import { router } from "expo-router";

import useContextoTarefa from "../components/context/useTaskProvider.js";

import { IconeLapis } from "../components/icons/icons.jsx";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Tarefas() {
  const { deletarTarefa, alternarTarefa} = useContextoTarefa();
  const { tarefas } = useContextoTarefa();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <View>
          <View style={estilos.listaTarefas}>
            <FlatList
              data={tarefas}
              renderItem={({ item }) => <ItemTarefa descricao={item.descricao} completada={item.completada} deletar={() => deletarTarefa(item.id)} completar={() => alternarTarefa(item.id)} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 8 }}></View>}
              ListHeaderComponent={<Text style={estilos.texto}>Lista de tarefas</Text>}
              ListFooterComponent={<BotaoAcao acao={'Adicionar tarefa'} icone={<IconeLapis />} onPress={() => router.navigate('criarTarefa')} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

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
  texto: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 26,
    marginTop: 26,
  },
  listaTarefas: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    color: "#e5d9cf",
    paddingHorizontal: 10,
  }
})