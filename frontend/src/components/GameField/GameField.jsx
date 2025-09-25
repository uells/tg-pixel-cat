import './GameField.css'
import Cat from '../Cat/Cat';

export default function GameField() {
    return (
        <div className="game-field">
            <div className="game-field__grid">
                <Cat
                    x="50%"
                    y="30px"
                />
            </div>
        </div>
    );
}