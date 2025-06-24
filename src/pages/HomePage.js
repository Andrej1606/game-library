import { Fragment } from "react/jsx-runtime";
import Header from "../components/Layout/Header";

const HomePage = () => {
    return (
        <Fragment>
            <Header route='/game/add' title='Add Games' />
        </Fragment>
    )
}

export default HomePage;