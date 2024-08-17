import "./App.css";
import * as components from "./components/index.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import { useDrop } from "react-dnd";

function App() {
    const [shapes, setShapes] = useState([
        { id: 1, shape: "triangle" },
        { id: 2, shape: "square" },
        { id: 3, shape: "triangle" },
        { id: 4, shape: "square" },
    ]);

    const [newShapes, setNewShapes] = useState([]);
    const [{ isOver }, Drop] = useDrop(() => ({
        accept: "triangle",
        drop: (item) => addItem(item.id),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));

    function addItem(id) {
        const shapeList = initialShapes.filter((shape) => id === shape.id);
        setNewShapes(...newShapes, shapeList[0]);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <components.ColumnLeft />
            <div className="outerDiv">
                {shapes &&
                    shapes.map((shape) => (
                        <components.DndBox
                            key={shape.id}
                            shape={shape.shape}
                            id={shape.id}
                        />
                    ))}
            </div>

            <div ref={Drop} className="row">
                triangle{" "}
                {newShapes &&
                    newShapes.map((shape) => (
                        <components.DndBox
                            key={shape.id}
                            shape={shape.shape}
                            id={shape.id}
                        />
                    ))}
            </div>
            <components.ColumnRight />
        </DndProvider>
    );
}

export default App;
