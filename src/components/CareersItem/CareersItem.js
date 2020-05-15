import React from 'react';
import { Grid, Paper, Typography, Container, makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    container:  {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingTop: '2em',
        paddingBottom: '1em'
    },
    paper: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '&:hover': {
            '& $justForBorder': {
                transform: 'translateX(0)'
            },
            '& $arrow': {
                transform: 'translateX(10px)',
                opacity: 1
            }
        }
    },
    positionName: {
        fontWeight: 'bold',
        marginBottom: '2.5em'
    },
    salaryHeader: {
        color: myTheme.forthColor, 
        fontWeight: 'bold', 
        fontSize: '.75rem'
    },
    salaryValue: {
        color: myTheme.forthColor
    },
    linkWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    details: {
        fontSize: '.6rem',
        marginRight: '5px'
    },
    arrow: {
        display: 'flex',
        alignItems: 'center',
        color: myTheme.secondaryColor,
        fontSize: '1.25rem',
        fontWeight: 'bold',
        transition: '1s ease',
        opacity: 0,
        padding: '0 .5em',
        border: 'none',
        borderRadius: '5px',
        background: 'transparent',
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            cursor: 'pointer',
            background: myTheme.secondaryBgColor
        }
    },
    justForBorder: {
        border: `1px solid ${myTheme.secondaryColor}`,
        transform: 'translateX(-75%)',
        transition: '1s ease-in-out'
    }
});

const CareersItem = ({ careersItem, onClick }) => {

    const { name, salary } = careersItem;
    const classes = useStyles();
    
    return (
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
            <Paper square className={classes.paper}>
                <div className={classes.justForBorder}></div>
                <Container className={classes.container}>
                    <Typography className={classes.positionName} variant="h5">{name}</Typography>
                    <Typography className={classes.salaryHeader} >SALARY:</Typography>
                    <Typography className={classes.salaryValue} variant="body1">{salary}</Typography>
                    <div className={classes.linkWrapper}>
                        <button className={classes.arrow} onClick={e => onClick(careersItem)}><span className={classes.details}>DETAILS</span><ArrowRightAltIcon /></button>
                    </div>
                </Container>
            </Paper>
        </Grid>
    )
}

export default CareersItem;