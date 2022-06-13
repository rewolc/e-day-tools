import TDTable from "../../features/todo/atoms/table/table";
import AddTask from "../../features/todo/atoms/add-task/add-task";
import AddTaskModal from "../../features/todo/atoms/add-task-modal/add-task-modal";
import { changeTable, todoTables } from "../../features/todo/table-names";
import { DragDropContext } from "react-beautiful-dnd";
import "./todo.scss";
import React, { FC } from "react";
import { useStore } from "effector-react";
import { dragEnd } from "./utils";

const ToDo: FC = () => {
  const columns = useStore(todoTables);

  return (
    <div className="main">
      <AddTaskModal />
      <AddTask />
      <div className="main__container">
        <DragDropContext
          onDragEnd={(result) => dragEnd(result, columns, changeTable)}
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
