import classes from '../../styles/AddGameForm.module.css'

const AddGameForm = () => {
    return (
        <form className={classes.addGameForm}>
            <div className={classes.inputHolder}>
                <label htmlFor='picture'>Picture of the Game:</label>
                <input id='picture' type='file' title='Choose picture of the game.' />
            </div>
            <div className={classes.inputHolder}>
                <label htmlFor='name'>Game Name:</label>
                <input id='name' type='text' placeholder='Game Name' title="Type the name of the game." />
            </div>
            <div className={classes.inputHolder}>
                <label htmlFor='price'>Game Price:</label>
                <input id='price' type='number' min='0' placeholder='Game Price' title="Type the price of the game." />
            </div>

            <button>Add Game</button>
        </form>
    )
}

export default AddGameForm;