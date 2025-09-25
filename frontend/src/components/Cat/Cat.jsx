import { useEffect, useRef } from 'react';
import classes from './Cat.module.css';


export default function Cat({ x, y }) {

    const cat = useRef(null);

    useEffect(() => {
        let moveDown = null;
        const handleKeyDown = (e) => {
            if (e.key === "s" && !e.repeat) {
                moveDown = setInterval(() => {
                    cat.current.style.top = parseInt(cat.current.style.top) + 1 + "px";
                }, 30)
                cat.current.classList.add(classes.walkDown);
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
        <div ref={cat} className={[classes.cat].join(" ")} style={{ top: y, left: x }}>

        </div>
    )
}