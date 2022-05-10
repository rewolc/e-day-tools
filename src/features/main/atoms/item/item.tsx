import "./item.scss";

const Item: React.FC<{ value: any }> = ({ value }) => {
	const wheather = require(`../../../../assets/${Object.keys(value)}.png`);
	const style = {
		backgroundImage: `url(${wheather})`,
		backgroundSize: "40%",
		backgroundPosition: " right 50% bottom 30%",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className="item" style={style}>
			<div className="item__name">{Object.values(value)}</div>
		</div>
	);
};

export default Item;
