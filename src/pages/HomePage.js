import { Fragment } from "react";
import Header from "../components/Layout/Header";
import GameList from "../components/Games/GameList";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
    return (
        <Fragment>
            <Header title='Add Games' route='/game/add' />
            <GameList />
            <Footer />
        </Fragment>
    );
};

export default HomePage;
