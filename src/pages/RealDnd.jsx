import React, { useState } from "react";
import Task from "../components/Task";
import { useDrop } from "react-dnd";

function RealDnd() {
    const [todoList, setTodoList] = useState([
        { id: 1, content: "Wake Up" },
        { id: 2, content: "Do Breakfast" },
        { id: 3, content: "Exercise" },
        { id: 4, content: "Meditate" },
        { id: 5, content: "Learn something new" },
        { id: 6, content: "Take a walk" },
        { id: 7, content: "Read a book" },
        { id: 8, content: "Do laundry" },
        { id: 9, content: "Clean the house" },
        { id: 10, content: "Prepare lunch" },
        { id: 11, content: "Take a nap" },
        { id: 12, content: "Watch a movie" },
    ]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleComplete = (task) => {
        const isInCompleted = completedTasks.find((t) => t.id === task.id);
        if (isInCompleted) {
            // Move from completed to todo
            setCompletedTasks((prev) => prev.filter((t) => t.id !== task.id));
            setTodoList((prev) => [...prev, task]);
        } else {
            // Move from todo to completed
            setCompletedTasks((prev) => [...prev, task]);
            setTodoList((prev) => prev.filter((t) => t.id !== task.id));
        }
    };

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop(item) {
            handleComplete(item.data);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div className="flex flex-row items-stretch gap-6 p-8 max-w-[1920px] mx-auto h-screen">
            <div className="w-1/2 backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-100">
                    Todo Tasks
                </h2>
                <div className="overflow-y-auto grid grid-cols-1 gap-4 bg-gray-900/50 rounded-lg border-2 border-gray-700/50 p-4 h-[calc(100%-5rem)]">
                    {todoList.map((task, index) => (
                        <Task
                            key={task.id}
                            index={index}
                            data={task}
                            onComplete={handleComplete}
                            isCompleted={false}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2 backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-100">
                    Completed Tasks
                </h2>
                <div
                    ref={drop}
                    className={`overflow-y-auto grid grid-cols-1 gap-4 rounded-lg border-2 p-4 h-[calc(100%-5rem)] ${
                        isOver
                            ? "bg-gray-700/50 border-green-500/50"
                            : "bg-gray-900/50 border-gray-700/50"
                    }`}
                >
                    {completedTasks.map((task, index) => (
                        <Task
                            key={task.id}
                            index={index}
                            data={task}
                            onComplete={handleComplete}
                            isCompleted={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RealDnd;
