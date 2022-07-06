import "./index.scss";
import React, { FC } from "react";
import { CustomnSlider } from "../CustomSlider";
import { Form, Input } from "antd";
import { inputNames } from "./utils";

type IputAdapterProps = {
  form?: any;
  label: string;
  name: string;
  plholder?: string;
  type: string;
};

export type CustomnInput = Omit<IputAdapterProps, "label" | "type">;

export const CustomnInput: FC<CustomnInput> = ({ name, plholder }) => {
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

export const IputAdapter: FC<IputAdapterProps> = ({
  form,
  name,
  label,
  plholder,
  type,
}) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      {inputNames[type] === "input" && (
        <CustomnInput name={name} plholder={plholder} />
      )}
      {inputNames[type] === "slider" && (
        <CustomnSlider form={form} name={name}></CustomnSlider>
      )}
      {inputNames[type] === "select" && (
        <CustomnSlider form={form} name={name}></CustomnSlider>
      )}
    </div>
  );
};
