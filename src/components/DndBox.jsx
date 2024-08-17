import React from "react";
import { useDrag } from "react-dnd";

function DndBox({ id, shape }) {
    const [{ isDragging }, Drag] = useDrag(() => ({
        type: shape,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            ref={Drag}
            style={{ backgroundColor: isDragging ? "red" : "aquamarine" }}
            className="dndbox"
        >
            {shape}
        </div>
    );
}

export default DndBox;
