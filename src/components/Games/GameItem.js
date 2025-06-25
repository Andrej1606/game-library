import classes from '../../styles/GameItem.module.css'
import { useNavigate } from 'react-router-dom'

const GameItem = (props) => {
    const navigate = useNavigate()

    return (
        <div key={props.key} className={classes.game}>
            <h3>{props.title}</h3>
            <img src={props.src} />
            <p>Price: ${props.price}</p>
            <div className={classes.buttonHolder}>
                <button onClick={() =>
                    navigate(`/game/${props.id}`, {
                        state: {
                            title: props.title,
                            image: props.src,
                            price: props.price,
                            description: props.description
                        }
                    })}
                    type='button' className={classes.viewEdit}>View</button>
                <button onClick={() => navigate(`/game/edit/${props.id}`, {
                    state: {
                        title: props.title,
                        price: props.price
                    }
                })}
                    type='button' className={classes.viewEdit}>Edit</button>
                <button type='button' className={classes.delete}>Delete</button>
            </div>
        </div>

    )
}

export default GameItem