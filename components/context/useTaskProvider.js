import { useContext } from "react";
import { ContextoTarefa } from "../context/taskProvider.jsx";

export default function useContextoTarefa() {
    const contexto = useContext(ContextoTarefa)
    if (!contexto) {
        throw new Error('Tentando acessar o contexto fora do ContextoTarefa')
    }
    return contexto
}