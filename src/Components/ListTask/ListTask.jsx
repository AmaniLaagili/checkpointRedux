import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);

    const [filterEdit, setfilterEdit] = useState(todos);

    const handleClick = () => {
        setfilterEdit(todos.filter((elment) => elment.isDone));
    };

    const handleClickNote = () => {
        setfilterEdit(todos.filter((element) => !element.isDone));
    };
    const RemoveAllFilter = () => {
        setfilterEdit(todos);
    };
    useEffect(() => {
        setfilterEdit(todos);
    }, [todos]);
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handleClick}>
                    Show Done
                </Button>
                <Button variant="outline-danger" onClick={handleClickNote}>
                    {" "}
                    Show Not Done
                </Button>
                <Button variant="info" onClick={RemoveAllFilter}>
                    Remove All Filters
                </Button>
            </div>
            {filterEdit.map((task, index) => (
                <Task toDo_task={task} key={index} index={index} />
            ))}
        </div>
    );
}

export default ListTask;
