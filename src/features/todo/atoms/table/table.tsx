import "./table.scss";
import { ITable } from "../../table-names";
const TDTable: React.FC<{ table: ITable }> = ({ table }) => {
	return (
		<div className="table">
			<div className="table__name">{Object.values(table)}</div>
			<div className="table__tasks">{Object.values(table)}</div>
		</div>
	);
};

export default TDTable;
