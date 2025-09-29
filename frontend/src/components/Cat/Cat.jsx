import { useEffect, useRef } from 'react';
import classes from './Cat.module.css';


export default function Cat({ x, y, fieldSize }) {

    const cat = useRef(null);

    useEffect(() => {
        let moveDown = null;

        const computePositionTop = (currentPositionTop) => {

            let newPositionTop = (parseInt(currentPositionTop) + 1) % fieldSize.height;
            if (newPositionTop == fieldSize.height - 1) {
                newPositionTop = -50;
            }
            return newPositionTop + "px";
        }

        const handleKeyDown = (e) => {
            if (e.key === "s" && !e.repeat) {
                cat.current.classList.add(classes.walkDown);
                moveDown = setInterval(() => {
                    cat.current.style.top = computePositionTop(cat.current.style.top);
                }, 20)

            }
        };

        const handleKeyUp = (e) => {
            clearInterval(moveDown);
            cat.current.classList.remove(classes.walkDown);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);


        return () => {
            clearInterval(moveDown);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };

    }, [])

    return (
        <div ref={cat} className={[classes.cat].join(" ")} style={{ top: y + "px", left: x + "px" }}>

        </div>
    )
}