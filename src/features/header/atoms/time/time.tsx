import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import { useState, useEffect } from "react";
import { timeType } from "./timeType";
import AnimatedNumber from "./animated/number";
const TimeInHeader = () => {
	const [time, updateTime] = useState<timeType>({
		hours: getHours(new Date()),
		minutes: getMinutes(new Date()),
	});
	useEffect(() => {
		setInterval(() => {
			updateTime({
				hours:
					getHours(new Date()) < 10 ? "0" + String(getHours(new Date())) : getHours(new Date()),
				minutes:
					getMinutes(new Date()) < 10
						? "0" + String(getMinutes(new Date()))
						: getMinutes(new Date()),
			});
		}, 1000);
		return () => clearInterval();
	}, []);

	return (
		<div className="header__time">
			Сейчас&nbsp;
			<AnimatedNumber time={time.hours} />:{time.minutes < 10 && "0"}
			<AnimatedNumber time={time.minutes} />
		</div>
	);
};

export default TimeInHeader;
