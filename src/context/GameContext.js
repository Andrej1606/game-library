import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');

    const fetchGames = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const filtered = data.products.map(product => ({
            ...product,
            images: product.images || ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fdesign-bootcamp%2Funderstanding-error-codes-in-software-development-fbdf62fc585&psig=AOvVaw0F4tZBnlufGR_yw_AwWf-x&ust=1751047266685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCDwMTVj44DFQAAAAAdAAAAABAE']
        }));
        setGames(filtered);
    };

    const addGame = async (gameData) => {
        const res = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gameData)
        });
        const newGame = await res.json();
        const safeGame = {
            ...newGame,
            images: newGame.images || ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fdesign-bootcamp%2Funderstanding-error-codes-in-software-development-fbdf62fc585&psig=AOvVaw0F4tZBnlufGR_yw_AwWf-x&ust=1751047266685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCDwMTVj44DFQAAAAAdAAAAABAE']
        };
        setGames(prev => [...prev, safeGame]);
    };

    const updateGame = async (id, updatedData) => {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        const updatedGame = await res.json();

        setGames(prev =>
            prev.map(game => (game.id === id ? { ...updatedGame } : game))
        );
    };


    const deleteGame = (id) => {
        fetch(`https://dummyjson.com/products/${id}`, { method: 'DELETE' });
        setGames(prev => prev.filter(game => game.id !== id));

    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <GameContext.Provider value={{
            games,
            addGame,
            updateGame,
            deleteGame,
            search,
            setSearch
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => useContext(GameContext);