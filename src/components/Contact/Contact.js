import React from 'react'
import { makeStyles, Container, TextField, Grid } from '@material-ui/core';
import ArrowButton from '../ArrowButton/ArrowButton';
import { myTheme }  from '../../theme';

const useStyles = makeStyles({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    gridContainer: {
        width: '70%'
    },
    inputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: myTheme.fifthColor,
        width: '60%',
        marginBottom: '5em',
    },
    TextField: {
        width: '100%',
        color: myTheme.tertiaryColor,
        '& label': {
            color: myTheme.tertiaryColor,
        },
        '& label.Mui-focused': {
            color: myTheme.tertiaryColor,
        },
        '& .MuiInputBase-input': {
            color: myTheme.tertiaryColor
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: myTheme.fifthColor,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: myTheme.tertiaryColor,
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: myTheme.fifthColor,
        },
    },
    '@media (max-width: 768px)': {
        gridContainer: {
            width: '90%'
        },
    },
});

const Contact = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid className={classes.gridContainer} container justify="center" spacing={4}>
                <Grid item xs={12} sm={12} md={6} >
                    <TextField className={classes.TextField} required label="Name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <TextField className={classes.TextField} required label="E-mail" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <TextField
                        className={`${classes.TextField}  ${classes.message}`}
                        id="standard-textarea"
                        label="Message"
                        placeholder="Tell us about your project"
                        multiline
                    />
                </Grid>
            </Grid>
            <ArrowButton text="SEND" />
        </Container>
    );
}

export default Contact;