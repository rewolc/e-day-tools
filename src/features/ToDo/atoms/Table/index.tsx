import "./index.scss";
import React, { FC } from "react";
import Task from "../Task";
import { ColumnT, TasksT } from "../../table-names";
import { Droppable } from "react-beautiful-dnd";

type Props = { table: ColumnT; tableId: string };

const TDTable: FC<Props> = ({ table, tableId }) => {
  const { name, tasks } = table;

  return (
    <div className="table">
      <div className="table__name">{name as String}</div>
      <Droppable key={tableId} droppableId={tableId}>
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
              {(tasks as TasksT)?.map((task, indx) => (
                <Task key={indx} tableId={tableId} task={task} tuskInd={indx} />
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
