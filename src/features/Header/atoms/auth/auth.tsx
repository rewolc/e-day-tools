import "./auth";
import React, { FC } from "react";
import { IconStyles } from "../../../../antdStyles/iconStyles";
import { UserOutlined } from "@ant-design/icons";

export const AuthInHeader: FC = () => {
  return (
    <div className="header__login">
      userName&nbsp; <UserOutlined style={IconStyles} />
    </div>
  );
};
