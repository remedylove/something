import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ServiceCard from '../ServiceCard/ServiceCard';
import { services } from '../../store';

const useStyles = makeStyles({
    gridContainer: {
        maxWidth: '100%',
        marginLeft: 0
    },
    '@media (max-width: 768px)': {
        gridContainer: {
            marginTop: '2.5em'
        }
    },
    '@media (max-width: 425px)': {
        gridContainer: {
            marginTop: 0
        }
    }
});

const ServiceCardList = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.gridContainer} container justify="center" spacing={2}>
            {services.map(service =>(
                <ServiceCard key={service.id} service={service} />
            ))}
        </Grid>
    )
}

export default ServiceCardList;