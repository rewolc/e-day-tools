export const tableNames = [
	{ all: "Все Задачи" },
	{ inWork: "В Работе" },
	{ complete: "Выполненные" },
	{ delayed: "Отложенные" },
];

export interface ITable {
	all?: string;
	inWork?: string;
	complete?: string;
	delayed?: string;
}
