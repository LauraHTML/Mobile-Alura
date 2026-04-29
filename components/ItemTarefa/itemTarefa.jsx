
import { Text, StyleSheet, View } from "react-native";
import { BotaoTarefa } from "../botaoTarefa/botaoTarefa.jsx";

import { IconeFinalizado } from "../icons/icons.jsx";
import { IconeLapis } from "../icons/icons.jsx";
import { IconeLixeira } from "../icons/icons.jsx";

export const ItemTarefa = ({ descricao, completar, deletar, completada, editar }) => {
    const estilosItemTarefa = [estilos.tarefaItem]

    if (completada) {
        estilosItemTarefa.push(estilos.tarefaConcluida)
    }
    return (
        <View style={estilosItemTarefa}>
            <BotaoTarefa onPress={completar} icone={<IconeFinalizado />} />
            <Text style={estilos.tarefaTexto}>{descricao}</Text>
            <View style={estilos.acoesTarefa}>
                <BotaoTarefa onPress={editar} icone={<IconeLapis />} />
                <BotaoTarefa onPress={deletar} icone={<IconeLixeira />} />
            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    tarefaItem: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        padding: 6,
        backgroundColor: "#ffffff",
        borderRadius: 32,
        width: 300,
        marginTop: 16,
    },

    acoesTarefa: {
        alignItems: "center",
        flexDirection: "row",
        gap: 3,
    },

    tarefaConcluida: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        padding: 6,
        backgroundColor: "#f59e0b",
        borderRadius: 4,
        width: 300,
    },

    tarefaTexto: {
        fontSize: 16,
        margin: 6,
    }
})