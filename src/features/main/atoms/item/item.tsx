import "./item.scss";
import { useSpring, animated } from "@react-spring/web";
import { Tool } from "../../tools/tools";
import { Link } from "react-router-dom";
const Item: React.FC<{
	value: Tool;
	index: number;
	itemToChoose: React.Dispatch<number>;
	show: boolean;
}> = ({ value, index, itemToChoose, show }) => {
	const image = require(`../../../../assets/${Object.keys(value)}.png`);

	const itemImg = {
		backgroundImage: `url(${image})`,
		backgroundSize: "30%",
		backgroundPosition: " right 50% bottom 30%",
		backgroundRepeat: "no-repeat",
		cursor: show ? "default" : "pointer",
	};
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: show ? (6 - index) * 300 : index * 300,
		reverse: show,
		config: {
			duration: 1000,
		},
	});

	return (
		<animated.div style={props} onClick={() => !show && itemToChoose(index)}>
			<Link to={`${Object.keys(value)}`} type="text/css">
				<div className="item" style={itemImg}>
					<div className="item__name">{Object.values(value)}</div>
				</div>
			</Link>
		</animated.div>
	);
};

export default Item;
