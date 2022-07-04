import "./index.scss";
import React from "react";
import { Button, Form } from "antd";
import { IputAdapter } from "../InputAdapter";

export const ModalContent = () => {
  const [form] = Form.useForm();

  return (
    <Form className="form" form={form} name="task_form">
      <IputAdapter
        label="Название"
        name="taskName"
        plholder="название задачи"
        type="input"
      />
      <IputAdapter
        label="Тип"
        name="taskDescr"
        plholder="тип задачи"
        type="input"
      />
      <IputAdapter
        label="Время"
        name="taskTime"
        plholder="время на задачу"
        type="slider"
      />
      <div className="form__footer">
        <Button type="default">Отмена</Button>

        <Button htmlType="submit" type="primary">
          Добавить
        </Button>
      </div>
    </Form>
  );
};
