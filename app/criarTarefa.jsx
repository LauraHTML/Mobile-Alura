import { KeyboardAvoidingView, Text, View, TextInput, Pressable, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function AddTask() {
    return (<KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.texto}>
                    Adicionar uma tarefa:
                </Text>
                <Text style={styles.label}>
                    Em que você está trabalhando?
                </Text>
                <TextInput
                    style={styles.input}
                    numberOfLines={10}
                    multiline={true}
                />
                <View style={styles.acao}>
                    <Pressable style={styles.botao}>
                        <Text>
                            Salvar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b1108',
        gap: 16,
        alignItems: 'center'
    },
    texto: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26
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