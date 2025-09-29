import { useRef, useEffect, useState } from "react"
import './GameField.css'
import Cat from '../Cat/Cat';

export default function GameField() {
    const fieldGrid = useRef();
    const [fieldSize, setFieldSize] = useState();

    useEffect(() => {
        if (fieldGrid.current) {
            setFieldSize({
                width: fieldGrid.current.offsetWidth,
                height: fieldGrid.current.offsetHeight,
            });
        }
    }, []);

    return (
        <div className="game-field">
            <div ref={fieldGrid} className="game-field__grid">
                {fieldSize && (
                    <Cat
                        x={fieldSize.width / 2}
                        y={fieldSize.height / 2}
                        fieldSize = {fieldSize}
                    />
                )}

            </div>
        </div>
    );
}