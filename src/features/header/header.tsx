import "./header.scss";
import TimeInHeader from "./atoms/time/time";
import { AuthInHeader } from "./atoms/auth/auth";
import { LogoInHeader } from "./atoms/logo/logo";
import { Outlet } from "react-router-dom";
const Header = () => {
	return (
		<>
			<div className="header">
				<LogoInHeader />
				<TimeInHeader />
				<AuthInHeader />
			</div>
			<Outlet />
		</>
	);
};

export default Header;
