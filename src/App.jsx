import { Button, Caixa, Flex, Input, Margin, Tarefa } from "./styles";

import React, { useState } from 'react';

function App() {
    const [tarefa, setTarefa] = useState('');
    const [listaTarefas, setListaTarefas] = useState([]);

    const addTarefa = () => {
        const novaTarefa = {
            id: Math.random(),
            tarefa: tarefa,
            feito: false,
        }

        setTarefa('');
        setListaTarefas([...listaTarefas, novaTarefa]);
    }

    const removerTarefa = (id) => {
        const listaAtualizada = listaTarefas.filter(tarefa => tarefa.id != id);
        setListaTarefas(listaAtualizada);
    }

    const alternarFeito = (id, feito) => {
        const posicao = listaTarefas.findIndex((tarefa) => tarefa.id == id);
        const novaLista = listaTarefas;
        novaLista[posicao].feito = !feito;
        setListaTarefas([...novaLista]);
    }

    return (
        <Caixa>
            <h1>Lista de Tarefas</h1>

            <Margin />

            <Flex>
                <Input  
                    value={tarefa}
                    onChange={(e) => { setTarefa(e.target.value) }}
                />
                <Button onClick={addTarefa}>
                    <i className='bx bx-add-to-queue'></i>
                </Button>
            </Flex>
            <Margin />
            <ul>
                {listaTarefas.map((tarefaLocal) => (
                    <>
                        <Tarefa checked={tarefaLocal.feito} key={tarefaLocal.id}>
                            <p onClick={() => alternarFeito(tarefaLocal.id, tarefaLocal.feito)} >{tarefaLocal.tarefa}</p>

                            <button onClick={() => removerTarefa(tarefaLocal.id)}>
                                <i className='bx bx-trash'></i>
                            </button>
                        </Tarefa>

                        <Margin />
                    </>
                ))}
            </ul>
        </Caixa>
    );
}

export default App;