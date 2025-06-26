import { Fragment } from "react/jsx-runtime";

import Header from "../components/Layout/Header";
import AddEditGameForm from "../components/UI/AddEditGameForm";
import Footer from "../components/Layout/Footer";

const AddPage = () => {
    return (
        <Fragment>
            <Header route='/' title='Back' />
            <AddEditGameForm pageHeader='Add Game' />
            <Footer />
        </Fragment>
    )
}

export default AddPage;