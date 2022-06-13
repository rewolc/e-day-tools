import "./table.scss";
import React, { FC } from "react";
import { TTable, TTask } from "../../table-names";
import Task from "../task/task";
import { Droppable } from "react-beautiful-dnd";

type Props = { table: TTable; tableId: string };

const TDTable: FC<Props> = ({ table, tableId }) => {
  const { name, tasks } = table;

  return (
    <div className="table">
      <div className="table__name">{name as String}</div>
      <Droppable droppableId={tableId} key={tableId}>
        {(provided, snapshot) => {
          return (
            <div
              className="table__tasks"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? "#edeef0"
                  : "rgb(255 255 255)",
              }}
            >
              {(tasks as TTask).map((task, indx) => (
                <Task key={indx} task={task} tuskInd={indx} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default TDTable;
