import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import useContextoTarefa from "../components/context/useTaskProvider";

export default function CriarTarefa() {
    const { adicionarTarefa } = useContextoTarefa();
    const [descricao, setDescricao] = useState('');

    const criarTarefa = () => {
        if (!descricao) {
            return
        }
        adicionarTarefa(descricao);
        setDescricao('');
    }  

    return (<KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <View style={styles.inner}>
            <Text style={styles.titulo}>
                Adicionar uma tarefa:
            </Text>
            <Text style={styles.subtitulo}>
                Em que você está trabalhando?
            </Text>
            <TextInput
                placeholder="Descreva aqui a sua tarefa"
                style={styles.input}
                numberOfLines={10}
                multiline={true}
                value={descricao}
                onChangeText={setDescricao}
            />
            <View style={styles.acao}>
                <Pressable style={styles.botao} onPress={criarTarefa}>
                    <Text>
                        Salvar
                    </Text>
                </Pressable>
            </View>
        </View>
    </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b1108',
        gap: 16,
        alignItems: 'center'
    },
    titulo: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26
    },
    subtitulo: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18
    },
    inner: {
        backgroundColor: '#80B7FF',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32
    },
    label: {
        fontWeight: 600,
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        height: 100
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    acao: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})