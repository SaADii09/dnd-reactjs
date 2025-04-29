import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RealDnd from "./Pages/RealDnd";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <RealDnd />
        </DndProvider>
    );
}

export default App;
