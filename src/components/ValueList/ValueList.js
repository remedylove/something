import React from 'react';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';
import { values } from '../../store'; 
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        margin: '2em',
        '&:hover': {
            '& $justForBorder': {
                transform: 'translateX(0)'
            },
        }
    },
    valueWrapper: {
        marginBottom: '2em'
    },
    value: {
        fontFamily: myTheme.secondaryFont,
        padding: '.5em 1em',
        color: myTheme.tertiaryColor,
        background: myTheme.tertiaryBgColor,
        fontWeight: 'bold',
        textDecoration: 'underline',
        textDecorationColor: myTheme.fifthColor,
    },
    description: {
        color: myTheme.forthColor,
        lineHeight: '1.5em'
    },
    justForBorder: {
        border: `1px solid ${myTheme.secondaryColor}`,
        transform: 'translateX(-75%)',
        transition: '1s ease-in-out',
        width: '100%',
    }
})

const ValueList = () => {

    const classes = useStyles();

    return (
        <Container>
            <Grid container justify="center">
                {values.map(value => (
                    <Grid className={classes.gridItem} item xs={10} sm={8} md={3}>
                        <Typography className={classes.valueWrapper} align="left"><span className={classes.value}>{value.name}</span></Typography>
                        <Typography className={classes.description} variant="body2" align="justify">{value.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ValueList
