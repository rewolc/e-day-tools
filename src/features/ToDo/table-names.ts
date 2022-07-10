import { createEvent, createStore } from "effector";
import { v4 as uuid } from "uuid";

type TaskHeaderT = {
  taskName: string;
  taskDescr: string;
  taskTime: string;
  taskImportance: string;
};

type TaskT = {
  id: string;
  header: TaskHeaderT;
  description: string;
};
type ColumnT = {
  name: string;
  tasks: TaskT[];
};
type TableT = {
  all: ColumnT;
  complete: ColumnT;
  delayed: ColumnT;
  inWork: ColumnT;
};

const objHeader = {
  importance: "#e1a62d",
  name: "Доделать ToDo",
  time: "1w",
  type: "доделать",
};
const tasks: TTask = [
  { description: "Сделать это", header: objHeader, id: uuid() },
  { description: "Сделать это", header: "Second Task", id: uuid() },
  { description: "Сделать это", header: "Third Task", id: uuid() },
  { description: "Сделать это", header: "Fourth Task", id: uuid() },
  { description: " ", header: "Fifth Task", id: uuid() },
];
export const tables: TableT = {
  all: {
    name: "Все Задачи",
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
  inWork: {
    name: "В Работе",
    tasks: [],
  },
};

export type THeaderTask = Record<string, string>;
export type TTask = Record<string, string | THeaderTask>[];
export type TTable = Record<string, string | TTask>;
export type TTables = Record<string, TTable>;

export const changeTable = createEvent();
export const addTask = createEvent("добавление задачи");
export const dataTables = createStore<TTables>(tables)
  .on(changeTable, (_, newState) => newState)
  .on(addTask, (state, newTask) => {
    return {
      ...state,
      all: {
        ...state.all,
        tasks: [
          // @ts-ignore
          ...state.all.tasks,
          { description: "Сделать это", header: newTask, id: uuid() },
        ],
      },
    };
  });
