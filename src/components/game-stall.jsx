import games from "./games";


function GameStall () {
    return (
        <div className="game-stall">
            <ul className="games-display">
                {games.map((game, index) => {
                    return (
                        <li key={index} className="game-card">
                            <div className="image-wrapper">
                                <img
                                src={game.img}
                                alt={"Image of " + game.title}
                                />
                            </div>

                            <div><button className="info-btn"><a target="_blank" href={game.info}>more info</a></button></div>
                            
                            <div className="game-title">{game.title}</div>
                            <div className="description">{game.description}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default GameStall