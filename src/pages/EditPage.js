import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";

import Header from "../components/Layout/Header";
import AddEditGameForm from "../components/UI/AddEditGameForm";
import Footer from "../components/Layout/Footer";

const EditPage = () => {
    const location = useLocation();
    const { id } = useParams();
    const { title, price, description, stock } = location.state || {};

    return (
        <Fragment>
            <Header route='/' title='Back' />
            <AddEditGameForm
                pageHeader='Edit Game'
                id={id}
                nameValue={title}
                priceValue={price}
                descriptionValue={description}
                stockValue={stock}
            />
            <Footer />
        </Fragment>
    );
};

export default EditPage;