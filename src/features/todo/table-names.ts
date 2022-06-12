import { v4 as uuid } from "uuid";

export const tableNames: ITable = [
  { all: "Все Задачи" },
  { inWork: "В Работе" },
  { complete: "Выполненные" },
  { delayed: "Отложенные" },
];
const objHeader = {
  name: "Доделать ToDo",
  time: "1w",
  importance: "#e1a62d",
  type: "доделать",
};
const tasks: TTask = [
  { id: uuid(), header: objHeader, description: "Сделать это" },
  { id: uuid(), header: "Second task", description: "Сделать это" },
  { id: uuid(), header: "Third task", description: "Сделать это" },
  { id: uuid(), header: "Fourth task", description: "Сделать это" },
  { id: uuid(), header: "Fifth task", description: " " },
];
export const tables: TTables = {
  all: {
    name: "Все Задачи",
    tasks: tasks,
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

export type THeaderTask = {
  name: string;
  time: string;
  importance: string;
  type: string;
};
export type TTask = Array<Record<string, string | THeaderTask>>;
export type TTables = Record<string, TTable>;
export type TTable = Record<string, string | TTask>;
export type ITable = Array<Record<string, string>>;
