import { getYear } from "../../date-utils";
import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => getYear(d)}
				linkToYear={false}
				linkToMonth={false}
				linkToQuarter={false}
				linkToWeek={false}
			/>
		</>
	);
}
