import { Fragment } from "react/jsx-runtime";

import Header from "../components/Layout/Header";
import AddEditGameForm from "../components/UI/AddEditGameForm";

const AddPage = () => {
    return (
        <Fragment>
            <Header route='/' title='Back' />
            <AddEditGameForm pageHeader='Add Game' />
        </Fragment>
    )
}

export default AddPage;