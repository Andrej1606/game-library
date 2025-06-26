import { Fragment } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";

import Header from "../components/Layout/Header";
import AddEditGameForm from "../components/UI/AddEditGameForm";
import Footer from "../components/Layout/Footer";

const EditPage = () => {
    const location = useLocation();
    const { title, price, description, stock } = location.state || {}

    return (
        <Fragment>
            <Header route='/' title='Back' />
            <AddEditGameForm
                pageHeader='Edit Game'
                nameValue={title}
                priceValue={price}
                descriptionValue={description}
                stockValue={stock}
            />
            <Footer />
        </Fragment>
    )

}

export default EditPage;