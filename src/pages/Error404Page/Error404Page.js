import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { myTheme } from '../../theme';
import ErrorImage from '../../assets/Illu404.svg';

const useStyles = makeStyles({
    container: {
        background: myTheme.secondaryBgColor, 
        marginTop: '4.8em',
        padding: '5em 2em',
        height: '100vh'
    },
    textColumn: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        paddingBottom: '2em'
    },
    image: {
        display: 'block', 
        margin: '0 auto',
        width: '80%'
    },
    textHeader: {
        fontWeight: 'bold', 
        color: myTheme.sixthColor
    },
    textSubtitles: {
        fontWeight: 300, 
        margin: '.75em 0 1em'
    },
    button: {
        color: myTheme.tertiaryColor,
        fontWeight: 'bold',
        background: myTheme.sixthColor,
        border: `1px solid ${myTheme.sixthColor}`,
        borderRadius: 0,
        padding: '.5em 2em',
        width: '100%',
        '&:hover':  {
            background: myTheme.tertiaryColor,
            color: myTheme.sixthColor,
            border: `1px solid ${myTheme.seventhColor}`,
        }
    },
    link: {
        width: '50%',
        textDecoration: 'none',
        color: myTheme.secondaryColor,
    },
    '@media (max-width: 768px)': {
        link: {
            width: '60%'
        },
        image: {
            width: '100%'
        }
    },
    '@media (max-width: 425px)': {
        link: {
            width: '75%'
        }
    }
});

const Error404Page = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container justify="center">
                <Grid className={classes.textColumn} item xs={12} sm={10} md={5}>
                    <Typography className={classes.textHeader} variant="h2">Oooops!</Typography>
                    <Typography className={classes.textSubtitles} variant="h5">We can’t seem to find a page you are looking for </Typography>
                    <Link className={classes.link} to="/"><Button className={classes.button}>Back to home</Button></Link>
                </Grid>
                <Grid item xs={10} sm={10} md={5}>
                    <img className={classes.image} src={ErrorImage} alt="" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Error404Page;