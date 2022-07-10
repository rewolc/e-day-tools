import React from "react";
import { DropResult } from "react-beautiful-dnd";
import { TableT, TasksT } from "../../features/ToDo/table-names";

export const dragEnd = (
  result: DropResult,
  columns: TableT,
  changeTable: Function
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const lastColumn = columns[source.droppableId];
    const newColumn = columns[destination.droppableId];
    const lastColumnTasks = [...(lastColumn.tasks as TasksT)];
    const newColumnTasks = [...(newColumn.tasks as TasksT)];
    const [removed] = lastColumnTasks.splice(source.index, 1);
    newColumnTasks.splice(destination.index, 0, removed);
    changeTable({
      ...columns,
      [source.droppableId]: {
        ...lastColumn,
        tasks: lastColumnTasks,
      },
      [destination.droppableId]: {
        ...newColumn,
        tasks: newColumnTasks,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const allItems = [...(column.tasks as TasksT)];
    const [removed] = allItems.splice(source.index, 1);
    allItems.splice(destination.index, 0, removed);
    changeTable({
      ...columns,
      [source.droppableId]: {
        ...column,
        tasks: allItems,
      },
    });
  }
};
