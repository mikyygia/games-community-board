import "./App.css";
import GameStall from "./components/game-stall";

function App() {
  return (
    <div>
      <nav className="banner">
        <div className="title">
          <p>games on display!</p>
          <h1>bittersweet adventure</h1>
        </div>

        <div className="more-info">credits to nhi</div>
      </nav>
      <GameStall />
    </div>
)
}

export default App
