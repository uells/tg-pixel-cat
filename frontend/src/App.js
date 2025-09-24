import './App.css';
import DistancePanel from "./components/DistancePanel/DistancePanel";
import GameField from "./components/GameField/GameField";

function App() {
  const [distance, setDistance] = useState(0);
  
  return (
    <div className="app">
        <DistancePanel></DistancePanel>
        <GameField></GameField>
    </div>
  );
}

export default App;
