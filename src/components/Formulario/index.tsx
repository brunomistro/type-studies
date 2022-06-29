import { Dispatch, SetStateAction, useState } from 'react';
import { ITarefa } from '../../types/Tarefas';
import Botao from '../Botao'
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Formulario({ setTarefas }: {setTarefas: Dispatch<SetStateAction<ITarefa[]>>}) {
	const [state, setState] = useState({
		tarefa: "",
		tempo: "00:00"
	})

	const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setTarefas(oldArr => 
			[ ...oldArr, 
				{
					...state ,
					selecionado: false,
					completado: false,
					id: uuidv4()
				}
			]
		)
		setState({
			tarefa: "",
			tempo:"00:00"
		})
	}

	return (
		<form className={style.novaTarefa} onSubmit={handleAdd}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
						value={state.tarefa}
						onChange={e => setState({ ...state, tarefa: e.target.value})}
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
						value={state.tempo}
						onChange={e => setState({ ...state, tempo: e.target.value})}
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
