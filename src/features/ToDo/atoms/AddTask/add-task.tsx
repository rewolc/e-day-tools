import "./add-task.scss";
import React, { FC, useState } from "react";
import { Button, Modal } from "antd";
import { ModalContent } from "../ModalContent";

export const AddTask: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const changeVisible = () => setVisible(!isVisible);

  return (
    <div className="add">
      <Button block onClick={changeVisible} size="large">
        Добавить Задачу
      </Button>
      <Modal
        bodyStyle={{ borderRadius: 100 }}
        closable={false}
        destroyOnClose={true}
        footer={null}
        onCancel={changeVisible}
        style={{ top: 200 }}
        title={<div className="title">Введите информацию о задаче</div>}
        visible={isVisible}
      >
        <ModalContent />
      </Modal>
    </div>
  );
};
