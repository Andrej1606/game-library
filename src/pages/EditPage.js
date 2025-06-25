import { Fragment } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";

import Header from "../components/Layout/Header";
import AddEditGameForm from "../components/UI/AddEditGameForm";

const EditPage = () => {
    const location = useLocation();
    const { title, price } = location.state || {}

    return (
        <Fragment>
            <Header route='/' title='Back' />
            <AddEditGameForm pageHeader='Edit Game' nameValue={title} priceValue={price} />
        </Fragment>
    )

}

export default EditPage;