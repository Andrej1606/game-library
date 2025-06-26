import { useState } from 'react';

import classes from '../../styles/AddGameForm.module.css'

const AddEditGameForm = (props) => {
    const [formValues, setFormValues] = useState({
        name: props.nameValue || '',
        price: props.priceValue || '',
        description: props.descriptionValue || '',
        stock: props.stockValue || ''
    });

    const nameHandler = (e) => {
        setFormValues((prev) => ({ ...prev, name: e.target.value }))
    }

    const priceHandler = (e) => {
        setFormValues((prev) => ({ ...prev, price: e.target.value }))
    }

    const descriptionHandler = (e) => {
        setFormValues((prev) => ({ ...prev, description: e.target.value }))
    }

    const stockHandler = (e) => {
        setFormValues((prev) => ({ ...prev, stock: e.target.value }))
    }

    return (
        <>
            <h2>{props.pageHeader}</h2>
            <form className={classes.addGameForm}>
                <div className={classes.inputHolder}>
                    <label htmlFor='picture'>Picture of the Game:</label>
                    <input
                        id='picture'
                        type='file'
                        title='Choose picture of the game.'
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='name'>Game Name:</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Game Name'
                        title="Type the name of the game."
                        value={formValues.name}
                        onChange={nameHandler} />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='price'>Game Price:</label>
                    <input
                        id='price'
                        type='number'
                        min='0'
                        step={0.01}
                        placeholder='Game Price'
                        title="Type the price of the game."
                        value={formValues.price}
                        onChange={priceHandler}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='description'>Game Description:</label>
                    <textarea
                        id='description'
                        placeholder='Game Description'
                        rows={5}
                        title='Type description for the game.'
                        value={formValues.description}
                        onChange={descriptionHandler}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='stock'>Game Stock:</label>
                    <input
                        type='number'
                        id='stock'
                        min={0}
                        step={1}
                        placeholder='Game Stock'
                        title='Input amount of available games'
                        value={formValues.stock}
                        onChange={stockHandler}
                    />
                </div>

                <button>{props.pageHeader}</button>
            </form>
        </>
    )
}

export default AddEditGameForm;