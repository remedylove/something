import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    imageSection: {
        margin: '0 auto',
        width: '100%',
        height: '100%'
    },
    image: {
        display: 'block', 
        maxWidth: '100%'
    },
})

const FullPortfolioImage = ({ image }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={6}>
            <div className={classes.imageSection}>
                <img className={classes.image} src={image} alt="" />
            </div>
        </Grid>
    )
}

export default FullPortfolioImage
