import style from "./Botao.module.scss";

export default function index({ texto }: {texto: String}) {
	return (
		<button className={style.botao}>
			{texto}
		</button>
	)
}
