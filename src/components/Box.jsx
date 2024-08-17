import React, { useState } from "react";
import "../App.css";

function Box() {
    const [boxX, setBoxX] = useState(0);
    const [boxY, setBoxY] = useState(0);
    return (
        <div
            draggable
            onDragStart={(e) => {
                const element = e.currentTarget;

                setBoxX(e.pageX - element.offsetLeft);
                setBoxY(e.pageY - element.offsetTop);
                console.log(boxX, "<-x /start/ y-> ", boxY);
            }}
            onDragEnd={(e) => {
                const element = e.currentTarget;

                let posX = e.clientX - boxX + "px";
                let posY = e.clientY - boxY + "px";
                element.style.left = posX;
                element.style.top = posY;
                console.log(posX, "<-x /END/ y-> ", posY);
            }}
            className="box"
        ></div>
    );
}

export default Box;
