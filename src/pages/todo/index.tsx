import "./todo.scss";
import React, { FC } from "react";
import TDTable from "../../features/ToDo/atoms/Table/table";
import { AddTask } from "../../features/ToDo/atoms/AddTask/add-task";
import { DragDropContext } from "react-beautiful-dnd";
import { changeTable, dataTables } from "../../features/ToDo/table-names";
import { dragEnd } from "./utils";
import { useStore } from "effector-react";

const ToDo: FC = () => {
  const columns = useStore(dataTables);

  return (
    <div className="main">
      <AddTask />
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
