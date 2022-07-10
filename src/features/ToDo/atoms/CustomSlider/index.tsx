import "./index.scss";
import React, { FC, useState } from "react";
import { CustomInputProps } from "../InputAdapter";
import { Form, Slider } from "antd";

export const CustomnSlider: FC<CustomInputProps> = ({ name, form }) => {
  //  TODO сделать инпут для ввода времени
  const [timeValue, setTimeValue] = useState<string | undefined>("0h");

  const sliderFormatter = (value: number) => {
    if (value < 24) {
      return value + "h";
    } else {
      const hours = value % 24;
      const days = (value - hours) / 24;

      return !hours ? `${days}d` : `${days}d ${hours}h`;
    }
  };

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
            validator: (_, value) =>
              value !== 0
                ? Promise.resolve()
                : Promise.reject(new Error("Время должно быть больше 0")),
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
