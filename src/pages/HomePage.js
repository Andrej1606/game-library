import { Fragment } from "react";

import Header from "../components/Layout/Header";
import classes from '../styles/HomePage.module.css'
import GameList from "../components/Games/GameList";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
    return (
        <Fragment>
            <Header route='/game/add' title='Add Games' />
            <GameList />
            <Footer />
        </Fragment>
    )
}

export default HomePage;