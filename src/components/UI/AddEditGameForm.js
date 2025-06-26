import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../context/GameContext';

import classes from '../../styles/AddGameForm.module.css';

const AddEditGameForm = (props) => {
    const navigate = useNavigate();
    const { addGame, updateGame } = useGameContext();

    const [formValues, setFormValues] = useState({
        image: props.imageValue || '',
        name: props.nameValue || '',
        price: props.priceValue || '',
        description: props.descriptionValue || '',
        stock: props.stockValue || ''
    });

    const fileHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            const tempUrl = URL.createObjectURL(file);
            setFormValues((prev) => ({ ...prev, image: tempUrl }));
        }
    };

    const changeHandler = (key) => (e) => {
        setFormValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const gameData = {
            title: formValues.name,
            price: parseFloat(formValues.price),
            description: formValues.description,
            stock: parseInt(formValues.stock),
            images: [formValues.image || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fdesign-bootcamp%2Funderstanding-error-codes-in-software-development-fbdf62fc585&psig=AOvVaw0F4tZBnlufGR_yw_AwWf-x&ust=1751047266685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCDwMTVj44DFQAAAAAdAAAAABAE']
        };

        if (props.pageHeader === 'Add Game') {
            addGame(gameData);
        }

        if (props.pageHeader === 'Edit Game') {
            updateGame(props.id, gameData);
        }

        navigate('/');
    };

    return (
        <>
            <h2>{props.pageHeader}</h2>
            <form className={classes.addGameForm} onSubmit={submitHandler}>
                <div className={classes.inputHolder}>
                    <label htmlFor='picture'>Picture of the Game:</label>
                    <input
                        id='picture'
                        type='file'
                        accept='image/*'
                        title='Choose picture of the game.'
                        onChange={fileHandler}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='name'>Game Name:</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Game Name'
                        value={formValues.name}
                        onChange={changeHandler('name')}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='price'>Game Price:</label>
                    <input
                        id='price'
                        type='number'
                        min='0'
                        step='0.01'
                        placeholder='Game Price'
                        value={formValues.price}
                        onChange={changeHandler('price')}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='description'>Game Description:</label>
                    <textarea
                        id='description'
                        rows={5}
                        placeholder='Game Description'
                        value={formValues.description}
                        onChange={changeHandler('description')}
                    />
                </div>
                <div className={classes.inputHolder}>
                    <label htmlFor='stock'>Game Stock:</label>
                    <input
                        id='stock'
                        type='number'
                        min='0'
                        step='1'
                        placeholder='Game Stock'
                        value={formValues.stock}
                        onChange={changeHandler('stock')}
                    />
                </div>
                <button type='submit'>{props.pageHeader}</button>
            </form>
        </>
    );
};

export default AddEditGameForm;