import TDTable from "../../features/todo/atoms/table/table";
import AddTask from "../../features/todo/atoms/add-task/add-task";
import {tableNames} from "../../features/todo/table-names";
import "./todo.scss";
import React from 'react'

const ToDo = () => {
    return (
        <div className="main">
            <AddTask/>
            <div className="main__container">
                {tableNames.map((table, indx) => (
                    <TDTable table={table} key={indx}/>
                ))}
            </div>
        </div>
    );
};

export default ToDo;
