import React from 'react';
import CareersItem from '../../components/CareersItem/CareersItem';
import { Container, Grid } from '@material-ui/core';
import { careers } from '../../store';


const CareersList = ({ chosenDetails, handleCareersItem }) => {
    
    return (
        <Container>
            <Grid container justify="center" spacing={4}>
                {careers.map(careersItem => (
                    <CareersItem key={careersItem.name} careersItem={careersItem} onClick={handleCareersItem} />
                ))}
            </Grid>
        </Container>
    )
}

export default CareersList
