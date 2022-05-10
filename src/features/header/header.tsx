import './header.scss'
import TimeInHeader from './atoms/time/time';
import { AuthInHeader } from './atoms/auth/auth';
import { LogoInHeader } from './atoms/logo/logo';
const Header = () => {
	return (
		<div className="header">
			<LogoInHeader/>
			<TimeInHeader/>
			<AuthInHeader/>
		</div>
	);
};

export default Header;
