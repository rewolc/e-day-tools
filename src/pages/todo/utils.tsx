// @ts-ignore
import React from "react";
// @ts-ignore
import { DropResult } from "react-beautiful-dnd";
// @ts-ignore
import { TTables, TTask } from "../../features/ToDo/table-names";
// @ts-ignore
import { Event, useStore } from "effector-react";

export const dragEnd = (
  result: DropResult,
  columns: TTables,
  changeTable: Event<void>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const lastColumn = columns[source.droppableId];
    const newColumn = columns[destination.droppableId];
    const lastColumnTasks = [...(lastColumn.tasks as TTask)];
    const newColumnTasks = [...(newColumn.tasks as TTask)];
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
    const allItems = [...(column.tasks as TTask)];
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

// TODO : разобраться с ts ignore
