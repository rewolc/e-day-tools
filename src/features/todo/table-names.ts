export const tableNames: ITable = [
    {all: "Все Задачи"},
    {inWork: "В Работе"},
    {complete: "Выполненные"},
    {delayed: "Отложенные"},
];

export type ITable = Array<Record<string, string>>
