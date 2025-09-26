import './GameField.css'
import Cat from '../Cat/Cat';
import CatV2 from '../CatV2/CatV2';

export default function GameField() {
    return (
        <div className="game-field">
            <div className="game-field__grid">
                <CatV2
                    x="50%"
                    y="30px"
                />
            </div>
        </div>
    );
}