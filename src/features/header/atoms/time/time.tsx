import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import { useState, useEffect } from "react";
import { timeType } from "./timeType";
const TimeInHeader = () => {
	const [time, updateTime] = useState<timeType>({
		hours: getHours(new Date()),
		minutes: getMinutes(new Date()),
	});
	useEffect(() => {
		setInterval(() => {
			updateTime({
				hours: getHours(new Date()) < 10 ? '0' +  String(getHours(new Date())) : getHours(new Date()) , 
				minutes: getMinutes(new Date()) < 10 ? '0' + String(getMinutes(new Date())) : getMinutes(new Date())
			});
		}, 3000);
		return () => clearInterval();
	}, []);

	return (
		<div className="header__time">
			Сейчас&nbsp;
			<span>
				{time.hours}:{time.minutes}
			</span>
		</div>
	);
};

export default TimeInHeader;
