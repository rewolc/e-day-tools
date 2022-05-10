import "./main.scss";
import { mainTools } from "../../features/main/tools/tools";
import Item from "../../features/main/atoms/item/item";

const Main = () => {
	return (
		<div className="main">
			<div className="main__container">
				{mainTools.map((value) => (
					<Item value = {value}/> 
				))}
			</div>
		</div>
	);
};

export default Main;
