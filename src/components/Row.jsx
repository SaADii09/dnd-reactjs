import React from "react";
import { useDrop } from "react-dnd";
import "../App.css";

function Row() {
    const [{ isOver }, Drop] = useDrop(() => ({
        accept: "triangle",
        drop: (item) => additem(item.id),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));

    function additem(id) {}

    return <div className="row">Delete</div>;
}

export default Row;
