import { useState } from "react";
import "./App.css";
import * as components from "./components/index.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    const [shapes, setShapes] = useState([
        { id: 1, shape: "triangle" },
        { id: 2, shape: "square" },
        { id: 3, shape: "triangle" },
        { id: 4, shape: "square" },
    ]);

    return (
        <DndProvider backend={HTML5Backend}>
            <components.ColumnLeft />

            {shapes &&
                shapes.map((shape) => (
                    <components.DndBox
                        key={shape.id}
                        shape={shape.shape}
                        id={shape.id}
                    />
                ))}

            <components.Row />
            <components.ColumnRight />
        </DndProvider>
    );
}

export default App;
