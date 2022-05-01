import './header.scss'
import HeaderTime from './atoms/time/time';

const Header = () => {
	return (
		<div className="header">
			<div className="header__app">eDayTools</div>
			<HeaderTime/>
			<div className="header__login">Привет, userName</div>
		</div>
	);
};

export default Header;
