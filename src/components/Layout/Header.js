import { useGameContext } from '../../context/GameContext';
import { Link } from 'react-router-dom';

import classes from '../../styles/Header.module.css';

const Header = ({ route, title }) => {
    const { setSearch } = useGameContext();

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header>
            <Link to='/' className={classes.logo}>Game Library</Link>
            <nav>
                {title === 'Add Games' && (
                    <div className={classes.searchBox}>
                        <label htmlFor='search'><svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg></label>
                        <input
                            type='search'
                            placeholder='Search'
                            id='search'
                            onChange={searchHandler}
                        />
                    </div>
                )}
                <Link to={route}>{title}</Link>
            </nav>
        </header>
    );
};

export default Header;

