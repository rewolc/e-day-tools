import "./index.scss";
import React, { FC, useMemo } from "react";
import { Collapse } from "antd";
import { Draggable } from "react-beautiful-dnd";
import { TaskHeaderT } from "../../table-names";
import { importantNames } from "./utils";

type Props = {
  task: Record<string, string | TaskHeaderT>;
  tuskInd: number;
  tableId: string;
};

const Task: FC<Props> = ({ task, tuskInd, tableId }) => {
  const { id, header, description } = task;
  const { taskName, taskTime, taskImportance, taskType } =
    header as TaskHeaderT;
  const canDrag = "" + tableId !== "complete";
  const textStyle = canDrag ? "" : "line-through";
  const CollapseHeader = useMemo(
    () => (
      <div className="collapse">
        <div className="collapse__data">
          <div
            className="collapse__data__name"
            style={{ textDecoration: textStyle }}
          >
            {taskName}
          </div>
          <div className="collapse__data__type">{taskType}</div>
        </div>
        <div className="collapse__duration">
          <div className="collapse__duration__time">{taskTime}</div>
          <div
            className="collapse__duration__importance"
            style={{ backgroundColor: importantNames[taskImportance] }}
          ></div>
        </div>
      </div>
    ),
    [header, tableId]
  );
  if (canDrag) {
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
                <Collapse.Panel key={1} header={CollapseHeader}>
                  {<div className="task__description">{description} </div>}
                </Collapse.Panel>
              </Collapse>
            </div>
          );
        }}
      </Draggable>
    );
  }

  return (
    <Collapse
      bordered={false}
      className="task"
      expandIconPosition="right"
      style={{
        border: "3px solid #e7e7e7",
        borderRadius: "5px",
        borderStyle: "outset",
      }}
    >
      <Collapse.Panel key={1} header={CollapseHeader}>
        {<div className="task__description">{description} </div>}
      </Collapse.Panel>
    </Collapse>
  );
};

export default Task;
