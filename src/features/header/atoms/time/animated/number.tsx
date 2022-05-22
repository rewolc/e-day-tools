import { useSpring, animated, config } from "@react-spring/web";

const AnimatedNumber: React.FC<{ time: number | string }> = ({ time }) => {
	const { number } = useSpring({
		from: { number: 0 },
		number: +time,
		delay: 200,
		config: config.molasses,
	});

	return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

export default AnimatedNumber;
