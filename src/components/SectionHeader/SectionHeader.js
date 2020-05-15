import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    title: {
        fontFamily: myTheme.primaryFont,
        color: props => props.colorOne,
        fontWeight: 100,
    },
    titleSpan: {
        color: props => props.colorTwo,
        fontWeight: 700,
    },
    subtitle: {
        fontFamily: myTheme.secondaryFont,
        color: props => props.colorThree,
        fontWeight: 100,
        letterSpacing: '5px',
        marginTop: '2em',
        marginBottom: '5em'
    },
    '@media (max-width: 768px)': {
        title: {
            fontSize: '5rem'
        },
        subtitle: {
            marginBottom: '2.5em'
        }
    },
    '@media (max-width: 425px)': {
        title: {
            fontSize: '3.5rem'
        },
        subtitle: {
            fontSize: '.75rem',
        }
    }
});

function SectionHeader({ titleThin, titleBold, subtitle, colorOne, colorTwo, colorThree }) {
    const classes = useStyles({ colorOne, colorTwo, colorThree });
    return (
        <>
            <Typography className={classes.title} variant="h1" align="center">{titleThin}<span className={classes.titleSpan}>{titleBold}</span></Typography>
            <Typography className={classes.subtitle} align="center">{subtitle}</Typography>
        </>
    )
}

SectionHeader.defaultProps = {
    background: myTheme.secondaryBgColor,
    colorOne: myTheme.primaryColor,
    colorTwo: myTheme.secondaryColor,
    colorThree: myTheme.forthColor
}

export default SectionHeader;