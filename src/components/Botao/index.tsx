import style from "./Botao.module.scss";

export default function Botao({ texto, type = "button" }: {
	texto: String,
	type?: "button" | "submit" | "reset" | undefined
}) {
	return (
		<button type={type} className={style.botao}>
			{texto}
		</button>
	)
}
