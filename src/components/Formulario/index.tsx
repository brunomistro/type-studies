import { Dispatch, SetStateAction, useState } from 'react';
import { ITarefa } from '../../types/Tarefas';
import Botao from '../Botao'
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setTarefas(oldArr => 
			[ ...oldArr, 
				{
					tarefa,
					tempo,
					selecionado: false,
					completado: false,
					id: uuidv4()
				}
			]
		)
		setTarefa("");
		setTempo("00:00");
	}

	return (
		<form className={style.novaTarefa} onSubmit={handleAdd}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
						value={tarefa}
						onChange={e => setTarefa(e.target.value)}
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
						value={tempo}
						onChange={e => setTempo(e.target.value)}
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
				<Botao texto="Adicionar" type="submit" />
      </form>
	)
}
