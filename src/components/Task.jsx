import React from "react";
import { useDrag } from "react-dnd";

function Task({ data, onComplete, isCompleted }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { data },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`p-4 rounded-lg shadow-lg cursor-move transition-colors duration-200 backdrop-blur-sm flex items-center gap-3 ${
                isDragging
                    ? "opacity-50 bg-gray-700/40"
                    : "bg-gray-800/40 hover:bg-gray-700/50"
            }`}
        >
            <input
                type="checkbox"
                checked={isCompleted}
                className="w-5 h-5 rounded-md border-2 border-gray-600 bg-gray-800/50 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                onChange={() => onComplete?.(data)}
            />
            <p className="text-sm text-gray-100 font-medium">{data.content}</p>
        </div>
    );
}

export default Task;
