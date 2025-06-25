import { useLocation } from "react-router-dom";

import Header from "../components/Layout/Header";
import classes from '../styles/GamePage.module.css'
import Footer from "../components/Layout/Footer";


const GamePage = () => {
    const location = useLocation()
    const { title, image, price, description } = location.state || {}

    return (
        <>
            <Header title='Back' route='/' />
            <div className={classes.gamePageInfo}>
                <h3 className={classes['game-title']}>{title}</h3>
                <img className={classes['game-image']} src={image} />
                <p className={classes['game-price']}>${price}</p>
                <p className={classes['game-description']}>{description}</p>
            </div>
            <Footer />
        </>
    )
}

export default GamePage;