import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/Tarefas";
import style from "./App.module.scss";

export default function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista tarefas={tarefas} />
			<Cronometro />
    </div>
  );
}