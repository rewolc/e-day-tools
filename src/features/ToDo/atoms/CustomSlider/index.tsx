import "./index.scss";
import React, { FC, useState } from "react";
import { CustomInputProps } from "../InputAdapter";
import { Form, Slider } from "antd";
import { sliderFormatter } from "./utils";

export const CustomnSlider: FC<CustomInputProps> = ({ name, form }) => {
  //  TODO сделать инпут для ввода времени
  const [timeValue, setTimeValue] = useState<string | undefined>("0h");

  const onSliderChange = () => {
    setTimeValue(sliderFormatter(form.getFieldsValue().taskTime));
  };

  return (
    <>
      <div className="showTime">{timeValue ?? "0h"}</div>
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
          onChange={onSliderChange}
        />
      </Form.Item>
    </>
  );
};
