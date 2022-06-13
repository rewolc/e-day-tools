import "./add-task.scss";
import React, { FC } from "react";
import { Button } from "antd";

const AddTask: FC = () => {
  return (
    <div className="add">
      <Button size="large" block>
        Добавить Задачу
      </Button>
    </div>
  );
};

export default AddTask;
