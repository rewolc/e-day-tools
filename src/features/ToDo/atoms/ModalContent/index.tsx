import "./index.scss";
import React from "react";
import { Button, Form } from "antd";
import { InputAdapter } from "../InputAdapter";
import { addTask } from "../../table-names";

export const ModalContent = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    console.log(form.getFieldsValue());
    addTask(form.getFieldsValue());
  };

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
        name="taskDescr"
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
      <div className="form__footer">
        <Button type="default">Отмена</Button>

        <Button htmlType="submit" onClick={onSubmit} type="primary">
          Добавить
        </Button>
      </div>
    </Form>
  );
};
