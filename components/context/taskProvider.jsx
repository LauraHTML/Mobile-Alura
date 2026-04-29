import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ContextoTarefa = createContext()
const STORAGE_KEY = 'chave-tarefas'

export function ProvedorTarefas({ children }) {

    const [tarefas, setTarefas] = useState([]);
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
            } catch (e) {
                console.error('Não foi possivel salvar')
            }
        };

        if (carregado) {
            storeData(tarefas)
        }
    }, [tarefas])

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                const tarefasCarregadas = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTarefas(tarefasCarregadas)
                setCarregado(true)
            } catch (e) {
                console.error('Não foi possível acessar tarefas')
            }
        };
        getData()
    }, [])

    const adicionarTarefa = (descricao) => {
        if (!descricao) return;
        const novaTarefa = { descricao, id: tarefas.length + 1 };
        setTarefas([...tarefas, novaTarefa]);
    }

    const atualizarTarefa = (descricao, id) => {
        console.log('autalizar tarefa')
        if (!descricao) return;
        setTarefas(oldState => {
            return oldState.map(tarefa => {
                if (tarefa.id === id) {
                    return { ...tarefa, descricao };
                }
                return tarefa;
            });
        });
    }

    const alternarTarefa = (id) => {
        setTarefas(oldState => {
            return oldState.map(tarefa => {
                if (tarefa.id == id) {
                    tarefa.completada = !tarefa.completada
                }
                return tarefa
            })
        })
    }

    const deletarTarefa = (id) => {
        setTarefas(oldState => {
            //tira o id da tarefa que recebeu da lista de tarefas
            return oldState.filter(tarefa => tarefa.id != id)
        })
    }

    return (
        <ContextoTarefa.Provider value={{
            tarefas,
            adicionarTarefa,
            alternarTarefa,
            atualizarTarefa,
            deletarTarefa
        }}>
            {children}
        </ContextoTarefa.Provider>
    )
}