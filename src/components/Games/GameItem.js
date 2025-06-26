import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import classes from '../../styles/GameItem.module.css'

const GameItem = (props) => {
    const navigate = useNavigate()
    const [stockText, setStockText] = useState('')
    const [stockClasses, setStockClasses] = useState('')

    const alertHandler = (e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#490f5c",
            cancelButtonColor: "#d32f2f",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    confirmButtonColor: '#490f5c'
                });
            }
        });
    }

    useEffect(() => {
        if (props.stock > 100) {
            setStockText('Hot')
            setStockClasses(`${classes.stock} ${classes.hot}`)
        } else if (props.stock > 0 && props.stock <= 100) {
            setStockText('Available')
            setStockClasses(`${classes.stock} ${classes.available}`)
        } else {
            setStockText('Sold out')
            setStockClasses(`${classes.stock} ${classes.sold}`)
        }
    }, [props.stock])

    return (
        <div key={props.id} className={classes.game}>
            <p className={stockClasses}>{stockText}</p>
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
                            description: props.description,
                        }
                    })}
                    type='button' className={classes.viewEdit}>View</button>
                <button onClick={() => navigate(`/game/edit/${props.id}`, {
                    state: {
                        title: props.title,
                        price: props.price,
                        description: props.description,
                        stock: props.stock
                    }
                })}
                    type='button' className={classes.viewEdit}>Edit</button>
                <button
                    type='button'
                    className={classes.delete}
                    onClick={alertHandler}
                >Delete</button>
            </div>
        </div >

    )
}

export default GameItem