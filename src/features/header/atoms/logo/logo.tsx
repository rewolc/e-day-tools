import React, { FC } from "react";
import { ToolOutlined } from "@ant-design/icons";
import { IconStyles } from "../../../../antdStyles/iconStyles";

export const LogoInHeader: FC = () => {
  return (
    <div className="header__app">
      eDayTools&nbsp;
      <ToolOutlined style={IconStyles} />
    </div>
  );
};
