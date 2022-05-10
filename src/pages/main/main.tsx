import "./main.scss";
import { mainTools } from "../../features/main/tools/tools";

const Main = () => {
	return (
		<div className="main">
			<div className="main__container">
				{Object.values(mainTools).map((value) => (
					<div className="main__item">
						<div className="main__item__name">{value}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Main;
