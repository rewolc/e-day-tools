import "./index.scss";
import React, { FC } from "react";
import { CustomInputProps } from "../InputAdapter";
import { Form, Input } from "antd";

export const CustomnInput: FC<CustomInputProps> = ({ name, plholder }) => {
  const inputStyle = {
    wrapperCol: {
      span: 50,
    },
  };

  return (
    <Form.Item
      {...inputStyle}
      name={name}
      rules={[
        {
          message: "Обязательное поле",
          required: true,
        },
      ]}
    >
      <Input showCount maxLength={30} placeholder={plholder} />
    </Form.Item>
  );
};
