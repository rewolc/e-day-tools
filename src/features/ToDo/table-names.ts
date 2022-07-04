import { createEvent, createStore } from "effector";
import { v4 as uuid } from "uuid";

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
export const tables: TTables = {
  all: {
    name: "Все Задачи",
    tasks: tasks,
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
export type TTask = Array<Record<string, string | THeaderTask>>;
export type TTables = Record<string, TTable>;
export type TTable = Record<string, string | TTask>;

export const changeTable = createEvent();
export const todoTables = createStore<TTables>(tables).on(
  changeTable,
  (_, newState) => newState
);
