import { useState } from 'react';

import classes from '../../styles/AddGameForm.module.css'

const AddEditGameForm = (props) => {
    const [formValues, setFormValues] = useState({
        name: props.nameValue || '',
        price: props.priceValue || '',
    });

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
                        onChange={(e) =>
                            setFormValues((prev) => ({ ...prev, name: e.target.value }))
                        } />
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
                        onChange={(e) =>
                            setFormValues((prev) => ({ ...prev, price: e.target.value }))
                        } />
                </div>

                <button>Add Game</button>
            </form>
        </>
    )
}

export default AddEditGameForm;