import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core';
import { services } from '../../store';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const useStyles = makeStyles({
    gridContainer: {
        paddingBottom: '2em'
    }
})

const Services = () => {

    const classes = useStyles();

    return (
        <Container>
            <Grid className={classes.gridContainer} container justify="center">
                {services.map((service, index) => (
                        <ServiceItem service={service} index={index} />
                ))}
            </Grid>
        </Container>
    )
}

export default Services;