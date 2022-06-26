import { v4 as uuid } from "uuid";
import { createEvent, createStore } from "effector";

const objHeader = {
  name: "Доделать ToDo",
  time: "1w",
  importance: "#e1a62d",
  type: "доделать",
};
const tasks: TTask = [
  { id: uuid(), header: objHeader, description: "Сделать это" },
  { id: uuid(), header: "Second Task", description: "Сделать это" },
  { id: uuid(), header: "Third Task", description: "Сделать это" },
  { id: uuid(), header: "Fourth Task", description: "Сделать это" },
  { id: uuid(), header: "Fifth Task", description: " " },
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

export type THeaderTask = Record<string, string>;
export type TTask = Array<Record<string, string | THeaderTask>>;
export type TTables = Record<string, TTable>;
export type TTable = Record<string, string | TTask>;

export const changeTable = createEvent();
export const todoTables = createStore<TTables>(tables).on(
  changeTable,
  (_, newState) => newState
);
