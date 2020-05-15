import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    arrow: {
        transition: '.5s ease',
        fontWeight: 400
    },
    button: {
        border: `1px solid ${myTheme.tertiaryColor}`,
        background: myTheme.tertiaryColor,
        color: myTheme.sixthColor,
        fontWeight: 'bold',
        padding: '.75em 5em',
        borderRadius: 0,
        margin: '2.5em auto 0',
        '&:hover': {
            background: myTheme.sixthColor,
            color: myTheme.tertiaryColor,
            border: `1px solid ${myTheme.seventhColor}`,
            fontWeight: 'bold',
            '& $arrow': {
                transform: 'translateX(5px)'
            }
        },
    },
})

const ArrowButton = ({ text, to, onClick, isDisabled }) => {

    const classes = useStyles();

    return (
        <Button 
            className={classes.button} 
            variant="contained"
            component={Link} to={to}
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}<ArrowRightAltIcon className={classes.arrow} fontSize="small" />
        </Button>
    )
}

export default ArrowButton;