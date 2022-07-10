import "./index.scss";
import React, { FC, useCallback } from "react";
import { Button, Form, FormInstance } from "antd";
import { InputAdapter } from "../InputAdapter";
import { addTask } from "../../table-names";
import { sliderFormatter } from "../CustomSlider/utils";
import { v4 as uuid } from "uuid";

type Props = {
  changeVisible: Function;
};

export const ModalContent: FC<Props> = ({ changeVisible }) => {
  const [form] = Form.useForm();

  const onSubmit = useCallback((el: FormInstance) => {
    const value = el.getFieldsValue();
    const newTask = {
      description: value.taskDescription,
      header: {
        ...value,
        taskTime: sliderFormatter(value.taskTime),
      },
      id: uuid(),
    };
    if (
      !(
        Object.values(el.getFieldsValue()).filter((el) => !!("" + el).trim())
          .length < 4
      )
    ) {
      addTask(newTask);
      changeVisible();
    }
  }, []);

  const onCancel = useCallback(() => {
    form.resetFields();
  }, []);

  return (
    <Form className="form" form={form} name="task_form">
      <InputAdapter
        label="Название"
        name="taskName"
        plholder="название задачи"
        type="input"
      />
      <InputAdapter
        label="Тип"
        name="taskType"
        plholder="тип задачи"
        type="input"
      />

      <InputAdapter
        centered
        separated
        form={form}
        label="Время"
        name="taskTime"
        type="slider"
      />
      <InputAdapter
        centered
        popover
        separated
        form={form}
        label="Срочность"
        name="taskImportance"
        type="radio"
      />
      <InputAdapter
        isTextArea
        label="Описание"
        name="taskDescription"
        plholder="Описание задачи"
        type="input"
      />
      <div className="form__footer">
        <Button onClick={onCancel} type="default">
          Отмена
        </Button>

        <Button
          disabled={false}
          htmlType="submit"
          onClick={() => onSubmit(form)}
          type="primary"
        >
          Добавить
        </Button>
      </div>
    </Form>
  );
};
