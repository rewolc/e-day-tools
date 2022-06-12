import "./auth";
import React, { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { IconStyles } from "../../../../antdStyles/iconStyles";

export const AuthInHeader: FC = () => {
  return (
    <div className="header__login">
      userName&nbsp; <UserOutlined style={IconStyles} />
    </div>
  );
};
