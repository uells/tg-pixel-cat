import { useEffect, useState, useRef } from 'react';
import classes from './CatV2.module.css';


export default function CatV2({ x, y }) {

    const [position, setPosition] = useState({"x": x, "y": y});
    const cat = useRef();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "s" || e.key === "ы") {
                setPosition(prev => ({ "x": parseInt(prev.x), "y" : parseInt(prev.y) + 1 }));
            }
            cat.current.classList.add(classes.walkDown);
            let timefDurationAnimation = setTimeout(() => {
                 cat.current.classList.remove(classes.walkDown);
            }, 600); 
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div ref={cat} className={[classes.cat].join(" ")} style={{ top: position.y + "px", left: position.x + "px" }}>

        </div>
    )
}