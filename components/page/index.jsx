import { useMemo } from "preact/hooks";
import { getParameter } from "../../params";
import * as classes from "./styles.module.css";

export default function Page({ children, id }) {
	let handedness = useMemo(() => getParameter("handedness", "right"), []);
	return (
		<div class={[classes.page, classes.lefthanded].join(" ")} id={id}>
			{children}
		</div>
	);
}
