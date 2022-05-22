import "./auth";
import { UserOutlined } from "@ant-design/icons";
import { IconStyles } from "../../../../antdStyles/iconStyles";
export const AuthInHeader = () => {
	return (
		<div className="header__login">
			userName&nbsp; <UserOutlined style={IconStyles} />
		</div>
	);
};
