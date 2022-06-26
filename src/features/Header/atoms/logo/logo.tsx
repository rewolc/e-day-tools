import React, { FC } from "react";
import { IconStyles } from "../../../../antdStyles/iconStyles";
import { ToolOutlined } from "@ant-design/icons";

export const LogoInHeader: FC = () => {
  return (
    <div className="header__app">
      eDayTools&nbsp;
      <ToolOutlined style={IconStyles} />
    </div>
  );
};
