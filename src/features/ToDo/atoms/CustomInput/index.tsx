import "./index.scss";
import React, { FC } from "react";
import { CustomInputProps } from "../InputAdapter";
import { Form, Input } from "antd";

export const CustomnInput: FC<CustomInputProps> = ({
  name,
  plholder,
  isTextArea,
}) => {
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
      {isTextArea ? (
        <Input.TextArea
          showCount
          autoSize={{ maxRows: 6, minRows: 3 }}
          maxLength={300}
          placeholder={plholder}
        />
      ) : (
        <Input showCount maxLength={30} placeholder={plholder} />
      )}
    </Form.Item>
  );
};
