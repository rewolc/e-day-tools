import "./add-task.scss";
import React, { FC, useState } from "react";
import { Button, Modal } from "antd";
import { ModalContent } from "../ModalContent";
import { useForm } from "react-hook-form";

export const AddTask: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const changeVisible = () => setVisible(!isVisible);
  const { handleSubmit, ...rest } = useForm();
  const onSubmit = (data: any) => 2 + data;

  return (
    <div className="add">
      <Button block onClick={changeVisible} size="large">
        Добавить Задачу
      </Button>
      <Modal
        bodyStyle={{ borderRadius: 100 }}
        cancelText="Отмена"
        okText="Добавить"
        onCancel={changeVisible}
        onOk={() => console.log("OK")}
        style={{ top: 200 }}
        title={<div className="title">Введите информацию о задаче</div>}
        visible={isVisible}
      >
        <form onSubmit={handleSubmit(onSubmit(23))}>
          <ModalContent formControl={rest} />
        </form>
      </Modal>
    </div>
  );
};
