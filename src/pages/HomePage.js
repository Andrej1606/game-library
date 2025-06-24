import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <Fragment>
            <Header route='/game/add' title='Add Games' />
        </Fragment>
    )
}

export default HomePage;