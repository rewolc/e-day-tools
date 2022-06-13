import React, { FC } from "react";
import "./add-task-modal.scss";
import { Button, Modal } from "antd";

type Props = {
  isVisible?: boolean;
};

const AddTaskModal: FC<Props> = ({ isVisible = true }) => {
  return (
    <Modal
      visible={isVisible}
      style={{ top: 200 }}
      bodyStyle={{ borderRadius: 100 }}
      title={<div className="title">Введите информацию о задаче</div>}
      footer={[
        <Button key="back">Отмена</Button>,
        <Button key="submit" type="primary">
          Добавить
        </Button>,
      ]}
    ></Modal>
  );
};

export default AddTaskModal;
