import { useGameContext } from '../../context/GameContext';
import GameItem from './GameItem';
import classes from '../../styles/GameList.module.css';

const GameList = () => {
    const { games, deleteGame, search } = useGameContext();

    const searchSafe = search || '';

    const filteredGames = games.filter(game =>
        game.title?.toLowerCase().includes(searchSafe.toLowerCase())
    );


    return (
        <div className={classes.gameList}>
            {filteredGames.length === 0 && <p className={classes.alert}>No Games Found...</p>}
            {filteredGames.map((game) => (
                <GameItem
                    key={game.id}
                    id={game.id}
                    src={game.images?.[0]} s
                    title={game.title}
                    price={game.price}
                    description={game.description}
                    stock={game.stock}
                    onDelete={deleteGame}
                />
            ))}
        </div>
    );
};

export default GameList;
