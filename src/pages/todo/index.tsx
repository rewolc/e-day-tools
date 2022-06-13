import TDTable from "../../features/todo/atoms/table/table";
import AddTask from "../../features/todo/atoms/add-task/add-task";
import { tables } from "../../features/todo/table-names";
import { DragDropContext } from "react-beautiful-dnd";
import "./todo.scss";
import React, { FC, useState } from "react";
import { dragEnd } from "./utils";

const ToDo: FC = () => {
  const [columns, setColumns] = useState(tables);

  return (
    <div className="main">
      <AddTask />
      <div className="main__container">
        <DragDropContext
          onDragEnd={(result) => dragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, table]) => {
            return <TDTable table={table} key={id} tableId={id} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default ToDo;
