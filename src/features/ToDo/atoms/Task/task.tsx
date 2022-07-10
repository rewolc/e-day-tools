import "./task.scss";
import React, { FC } from "react";
import { Collapse } from "antd";
import { Draggable } from "react-beautiful-dnd";
import { THeaderTask } from "../../table-names";
import { importantNames } from "./utils";

type Props = { task: Record<string, string | THeaderTask>; tuskInd: number };

const Task: FC<Props> = ({ task, tuskInd }) => {
  const { id, header, description } = task;
  const { taskName, taskTime, taskImportance, taskDescr } =
    header as THeaderTask;
  const CollapseHeader = () => (
    <div className="collapse">
      <div className="collapse__data">
        <div className="collapse__data__name">
          {typeof header === "string" ? header : taskName}
        </div>
        <div className="collapse__data__type">{taskDescr}</div>
      </div>
      <div className="collapse__duration">
        <div className="collapse__duration__time">{taskTime}</div>
        <div
          className="collapse__duration__importance"
          style={{ backgroundColor: importantNames[taskImportance] }}
        ></div>
      </div>
    </div>
  );

  return (
    <Draggable key={id as string} draggableId={id as string} index={tuskInd}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            className="task"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? "#a5e4aa" : "#e7e7e7",
              userSelect: "none",
              ...provided.draggableProps.style,
            }}
          >
            <Collapse bordered={false} expandIconPosition="right">
              <Collapse.Panel key={1} header={<CollapseHeader />}>
                {<div className="task__description">{description} </div>}
              </Collapse.Panel>
            </Collapse>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
