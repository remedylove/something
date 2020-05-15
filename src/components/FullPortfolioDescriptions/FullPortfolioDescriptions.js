import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ProjectTechnologies from '../ProjectTechnologies/ProjectTechnologies';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    gridItem: {
        overflow: 'hidden',
        '&:hover':  {
            '& $justForBorder': {
                transform: 'translateX(0)'
            }
        }
    },
    descriptionSection: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        margin: '0 auto',
        width: '90%', 
        height: '100%'
    },
    description: {
        color: myTheme.forthColor, 
        margin: '1em 0 1.25em 0',
        fontFamily: myTheme.primaryColor,
        fontWeight: 300
    },
    name: {
        color: myTheme.primaryColor
    },
    type: {
        color: myTheme.forthColor,
        fontSize: '.75rem',
        fontWeight: 'bold',
        marginBottom: '1em'
    },
    justForBorder: {
        width: '100%',
        borderBottom: `2px solid ${myTheme.secondaryColor}`,
        transition: '1s ease-in-out',
        transform: 'translateX(-100%)'
    },
    '@media (max-width: 959px)': {
        technologies: {
            marginBottom: '5em'
        },
        description: {
            fontSize: '.9rem',
            marginBottom: '2.5em'
        },
        descriptionSection: {
            marginBottom: '5em'
        }
    }
})

const FullPortfolioDescriptions = ({ type, name, description, technologies }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.gridItem} item xs={12} sm={12} md={6}>
            <div className={classes.justForBorder}></div>
            <div className={classes.descriptionSection}>
                <Typography className={classes.type} variant="body2" align="left">{type.toUpperCase()}</Typography>
                <Typography className={classes.name} variant="h5">{name}</Typography>
                <Typography className={classes.description} variant="body1">{description}</Typography>
                <ProjectTechnologies technologies={technologies} />
            </div>
        </Grid>
    )
}

export default FullPortfolioDescriptions;