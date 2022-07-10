import "./index.scss";
import React from "react";
import { Form, Radio } from "antd";

export const CustomRadio = () => {
  return (
    <Form.Item
      name={"taskImportance"}
      rules={[
        {
          message: "Обязательное поле",
          required: true,
        },
      ]}
    >
      <Radio.Group buttonStyle="solid" className="radio">
        <Radio.Button value="small">
          <div className="little_color" />
        </Radio.Button>
        <Radio.Button value="medium">
          <div className="medium_color" />
        </Radio.Button>
        <Radio.Button value="high">
          <div className="high_color" />
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};
