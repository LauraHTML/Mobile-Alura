
import { Text, StyleSheet, View } from "react-native";
import { BotaoTarefa } from "../botaoTarefa/botaoTarefa.jsx";
import { IconeFinalizado } from "../icons/icons.jsx";
import { IconeLapis } from "../icons/icons.jsx";
import { IconeLixeira } from "../icons/icons.jsx";

export const ItemTarefa = ({tituloTarefa, completada}) => {
    return(
        <View style={estilos.tarefaItem}>
            <BotaoTarefa icone={<IconeFinalizado />} />
            <Text style={estilos.tabsText}>{tituloTarefa}</Text>
            <BotaoTarefa icone={<IconeLapis />} />
            <BotaoTarefa icone={<IconeLixeira />} />
        </View>
    )
}

const estilos = StyleSheet.create({
    tarefaItem:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    paddingBlock: 6,
    },
})