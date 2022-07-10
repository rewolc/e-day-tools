import "./todo.scss";
import React, { FC } from "react";
import TDTable from "../../features/ToDo/atoms/Table";
import { DragDropContext } from "react-beautiful-dnd";
import { Task } from "../../features/ToDo/atoms/AddTask";
import { changeTable, dataTables } from "../../features/ToDo/table-names";
import { dragEnd } from "./utils";
import { useStore } from "effector-react";

const ToDo: FC = () => {
  const columns = useStore(dataTables);

  return (
    <div className="main">
      <Task />
      <div className="main__container">
        <DragDropContext
          onDragEnd={(result) => dragEnd(result, columns, changeTable)}
        >
          {Object.entries(columns).map(([id, table]) => {
            return <TDTable key={id} table={table} tableId={id} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default ToDo;
