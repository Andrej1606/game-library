import { Fragment, useState, useEffect } from "react";

import GameItem from "./GameItem";
import classes from '../../styles/GameList.module.css'

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/product')
            .then(results => results.json())
            .then(data => setGames(data.products))
            .catch(err => console.error(err)
            );
    }, [])

    return (
        <Fragment >
            <div className={classes.gameList}>
                {games.map(game => (
                    <GameItem
                        key={game.id}
                        id={game.id}
                        src={game.images[0]}
                        title={game.title}
                        price={game.price}
                        description={game.description}
                        stock={game.stock}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default GameList;

