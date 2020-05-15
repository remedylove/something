import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import PersonIcon from '@material-ui/icons/Person';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    gridItem: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontFamily: myTheme.primaryFont, 
        fontWeight: 400,
        margin: '.75em'
    },
    description: {
        color: myTheme.forthColor,
        fontWeight: 300,
        width: '75%'
    },
    icon: {
        color: myTheme.primaryBgColor,
        background: myTheme.secondaryColor, 
        borderRadius: '100%',
        padding: '.75em', 
    },
    '@media (max-width: 959px)': {
        gridItem: {
            margin: '2.5em auto'
        },
    }
})

const AboutCompany = () => {

    const classes = useStyles();

    return (
        <Container>
            <Grid container justify="center">
                <Grid className={classes.gridItem} item md={4}>
                    <BrushIcon className={classes.icon} />
                    <Typography className={classes.logo} align="center" variant="h5">Web Designers</Typography>
                    <Typography className={classes.description} variant="body2" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates. Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat.</Typography>
                </Grid>
                <Grid className={classes.gridItem} item md={4}>
                    <PersonIcon className={classes.icon} />
                    <Typography className={classes.logo} variant="h5" align="center">UX Designers</Typography>
                    <Typography className={classes.description} variant="body2" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates. Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat.</Typography>
                </Grid>
                <Grid className={classes.gridItem} item md={4}>
                    <CodeIcon className={classes.icon} />
                    <Typography className={classes.logo} variant="h5" align="center"> Web Developers</Typography>
                    <Typography className={classes.description} variant="body2" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates. Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutCompany;