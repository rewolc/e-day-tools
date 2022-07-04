import "./index.scss";
import React, { FC } from "react";
import { Form, Input, Slider } from "antd";
import { inputNames } from "./utils";

type IputAdapterProps = {
  label: string;
  name: string;
  plholder: string;
  type: string;
};

type CustomnInput = Omit<IputAdapterProps, "label" | "type">;

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
          message: "Это обязательное поле",
          required: true,
        },
      ]}
    >
      <Input showCount maxLength={30} placeholder={plholder} />
    </Form.Item>
  );
};

export const CustomnSlider: FC<CustomnInput> = ({ name, plholder }) => {
  const inputStyle = {
    wrapperCol: {
      span: 10,
    },
  };

  return (
    <Form.Item
      name={name}
      rules={[
        {
          message: "Время должно быть больше 0",
          required: true,
        },
      ]}
    >
      <Slider
        handleStyle={{ borderColor: "rgba(19, 185, 32, 0.37)" }}
        marks={{
          0: "0d",
          24: "1d",
          48: "2d",
          72: "3d",
          96: "4d",
          120: "5d",
          144: "6d",
          168: "7d",
        }}
        max={168}
      />
      <Form.Item
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "center",
        }}
        {...inputStyle}
        name={name}
      >
        <Input
          maxLength={30}
          placeholder={plholder}
          style={{
            textAlign: "center",
          }}
        />
      </Form.Item>
    </Form.Item>
  );
};

export const IputAdapter: FC<IputAdapterProps> = ({
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
        <CustomnSlider name={name} plholder={plholder}></CustomnSlider>
      )}
    </div>
  );
};
