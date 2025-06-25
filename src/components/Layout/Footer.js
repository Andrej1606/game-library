import classes from '../../styles/Footer.module.css'
import picture from './picture1.png'

const Footer = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.miniContainer}>
                    <div className={classes.col1}>
                        <p>🎮 Game Library</p>
                        <p>No dust. No discs. Just games.</p>
                    </div>
                    <div className={classes.imgHolder}>
                        <img src={picture}></img>
                    </div>
                    <div className={classes.col2}>
                        <p>© {new Date().getFullYear()} Game Library. All rights reserved.</p>
                        <p>Developed by Andrej</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;