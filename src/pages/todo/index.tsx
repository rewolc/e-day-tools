import TDTable from "../../features/todo/atoms/table/table";
import AddTask from "../../features/todo/atoms/add-task/add-task";
import { tableNames } from "../../features/todo/table-names";
import "./todo.scss";
const ToDo = () => {
	return (
		<div className="main">
			<AddTask />
			<div className="main__container">
				{tableNames.map((table) => (
					<TDTable table={table} />
				))}
			</div>
		</div>
	);
};

export default ToDo;
