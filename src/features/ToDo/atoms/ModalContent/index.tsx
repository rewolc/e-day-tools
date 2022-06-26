import React, { FC } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Input } from "antd";

type Props = {
  formControl: FieldValues;
};

type InputProps = {
  name: string;

  label: string;
  plholder: string;
};
export const ModalContent: FC<Props> = ({ formControl }) => {
  const { control, ...rest } = formControl;

  const CustomInput: FC<InputProps> = ({ name, label, plholder }) => (
    <div className={`${name}_container`}>
      <label className="label">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            className={`${name}_input`}
            placeholder={plholder}
            {...field}
          />
        )}
        rules={{ required: true }}
      />
    </div>
  );

  return (
    <>
      <CustomInput
        label="Название задачи"
        name="taskName"
        plholder="название задачи"
      />
      <CustomInput label="Тип задачи" name="taskType" plholder="тип задачи" />
      <CustomInput label="Время на выполнение" name="taskTime" plholder="8h" />
      <CustomInput label="Важность задачи" name="taskImportance" plholder="" />
    </>
  );
};
