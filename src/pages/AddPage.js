import { Fragment } from "react/jsx-runtime";

import Header from "../components/Layout/Header";
import AddGameForm from "../components/UI/AddGameForm";
import classes from '../styles/AddPage.module.css'

const AddPage = () => {
    return (
        <Fragment>
            <Header route='/' title='Home' />
            <h2>Add Game</h2>
            <AddGameForm />

        </Fragment>
    )
}

export default AddPage;