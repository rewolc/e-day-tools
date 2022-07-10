import "./index.scss";
import React, { FC } from "react";
import { CustomRadio } from "../CustomRadio";
import { CustomnInput } from "../CustomInput";
import { CustomnSlider } from "../CustomSlider";
import { Popover } from "antd";
import { inputNames } from "./utils";

type InputAdapterProps = {
  form?: any;
  separated?: boolean;
  label: string;
  name: string;
  plholder?: string;
  type: string;
  centered?: boolean;
  popover?: boolean;
  isTextArea?: boolean;
};

export type CustomInputProps = Omit<InputAdapterProps, "label" | "type">;

export const InputAdapter: FC<InputAdapterProps> = ({
  centered = false,
  popover = false,
  form,
  name,
  label,
  plholder,
  type,
  separated = false,
  isTextArea = false,
}) => {
  return (
    <div className="input">
      <label
        className={`input__label ${separated ? "input__separated" : ""} ${
          centered ? "input__centered" : ""
        }`}
      >
        {label}
        {popover && (
          <Popover content={"sadas"} trigger="hover">
            <p className="input__label__question">?</p>
          </Popover>
        )}
      </label>
      {inputNames[type] === "input" && (
        <CustomnInput isTextArea={isTextArea} name={name} plholder={plholder} />
      )}
      {inputNames[type] === "slider" && (
        <CustomnSlider form={form} name={name} />
      )}
      {inputNames[type] === "radio" && <CustomRadio />}
    </div>
  );
};
