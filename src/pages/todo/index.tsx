import TDTable from "../../features/todo/atoms/table/table";
import AddTask from "../../features/todo/atoms/add-task/add-task";
import { tables } from "../../features/todo/table-names";
import { DragDropContext } from "react-beautiful-dnd";
import "./todo.scss";
import React from "react";

const ToDo = () => {
  return (
    <div className="main">
      <AddTask />
      <div className="main__container">
        <DragDropContext onDragEnd={() => console.log("end")}>
          {Object.entries(tables).map(([id, table]) => {
            return <TDTable table={table} key={id} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default ToDo;
