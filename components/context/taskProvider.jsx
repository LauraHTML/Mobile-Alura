import { createContext, useState } from "react";

export const ContextoTarefas = createContext()


export function ProvedorTarefas({ children }) {

    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (descricao) => {
        setTarefas(oldState => {
            return [
                ...oldState,
                {
                    descricao,
                    id: oldState.length + 1
                }
            ]
        })
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
        <ContextoTarefas.Provider value={{
            tarefas,
            adicionarTarefa,
            alternarTarefa,
            deletarTarefa
        }}>
            {children}
        </ContextoTarefas.Provider>
    )
}