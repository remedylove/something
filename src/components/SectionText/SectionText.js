import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    text: {
        color: ({color}) => color,
        fontFamily: myTheme.primaryFont,
        fontWeight: 400,
        textAlign: 'center',
        maxWidth: '50%',
        margin: '0 auto'
    },
    image: {
        maxWidth: '25%', 
        margin: '2em auto 0'
    },
    '@media (max-width: 758px)':  {
        text:   {
            maxWidth: '90%',
            fontSize: '.9rem',
        },
        image: {
            maxWidth: '50%'
        }
    }
})

const SectionText = ({ text, color, image }) => {
    
    const classes = useStyles({ color });
    return (
        <>
            <Typography className={classes.text} variant="h6">{text}</Typography>
            <img className={classes.image} src={image} alt="" />
        </>
    )
}

SectionText.defaultProps = {
    color: myTheme.primaryColor
}

export default SectionText