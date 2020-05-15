import React from 'react'
import { makeStyles } from '@material-ui/core';
import Contact from '../../assets/contact.svg';

const useStyles = makeStyles({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%', 
    },
    image: {
        width: '40%', 
        minWidth: '250px', 
        margin: '0 auto'
    }
})

const LetUsKnow = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <img className={classes.image} src={Contact} alt="" />
        </div>
    )
}

export default LetUsKnow;