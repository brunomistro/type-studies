import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/Tarefas";
import style from "./App.module.scss";

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(escolhida: ITarefa) {
    setSelecionado(escolhida);
    setTarefas((oldArray) =>
      oldArray.map((item) => ({
        ...item,
        selecionado: item.id === escolhida.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((old) =>
        old.map((item) => {
          if (item.id === selecionado.id) {
            return { ...item, selecionado: false, completado: true };
          }
          return item;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}
