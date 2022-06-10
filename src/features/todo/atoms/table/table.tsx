import "./table.scss";
import {Collapse} from 'antd';
import React, {FC} from "react";
import Task from "../task/task";

type Props = { table: Record<string, string> }

const TDTable: FC<Props> = ({table}) => {
    return (
        <div className="table">
            <div className="table__name">{Object.values(table)}</div>
            <Collapse>
                <div className="table__tasks"><Task/></div>
            </Collapse>
        </div>
    );
};

export default TDTable;
