import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DndBox from "./DndBox";
import "../App.css";

function Row() {
    const [newShapes, setNewShapes] = useState([]);
    const [{ isOver }, Drop] = useDrop(() => ({
        accept: "triangle",
        drop: (item) => additem(item.id),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));

    function additem(id) {
        const shapeList = initialShapes.filter((shape) => id === shape.id);
        setNewShapes(...newShapes, shapeList[0  ]);
    }

    return (
        <div ref={Drop} className="row">
            triangle{" "}
            {newShapes &&
                newShapes.map((shape) => (
                    <DndBox key={shape.id} shape={shape.shape} id={shape.id} />
                ))}
        </div>
    );
}

export default Row;
