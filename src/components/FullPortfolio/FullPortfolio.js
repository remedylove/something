import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import FullPortfolioItem from '../FullPortfolioItem/FullPortfolioItem';

const useStyles = makeStyles({
    container: {
        marginBottom: '2.5em'
    },
    '@media (max-width: 959px)': {
        container: {
            marginBottom: 0,
            width: '90%',
        }
    },
    '@media (max-width: 425px)': {
        container: {
            width: '100%'
        },
    }
});

const FullPortfolio = ({ projects, amount }) => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {projects.slice(0, amount).map((project, index) => (
                <FullPortfolioItem key={project.name} project={project} index={index} />
            ))}
        </Container>
    )
}

export default FullPortfolio;