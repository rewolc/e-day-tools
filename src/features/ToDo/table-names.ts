import { createEvent, createStore } from "effector";

export type TaskHeaderT = {
  taskName: string;
  taskType: string;
  taskTime: string;
  taskImportance: string;
};

export type TaskT = {
  id: string;
  header: TaskHeaderT;
  description: string;
};
export type TasksT = TaskT[];
export type ColumnT = {
  name: string;
  tasks: TasksT;
};
export type TableT = Record<string, ColumnT>;

export const tables: TableT = {
  all: {
    name: "Все Задачи",
    tasks: [],
  },
  inWork: {
    name: "В Работе",
    tasks: [],
  },
  complete: {
    name: "Выполненные",
    tasks: [],
  },
  delayed: {
    name: "Отложенные",
    tasks: [],
  },
};

export const changeTable = createEvent();
export const addTask = createEvent<TaskT>("добавление задачи");
export const dataTables = createStore<TableT>(tables)
  .on(changeTable, (_, newState) => newState)
  .on(addTask, (state, newTask) => {
    return {
      ...state,
      all: {
        ...state.all,
        tasks: [...state.all.tasks, { ...newTask }],
      },
    } as TableT;
  });

