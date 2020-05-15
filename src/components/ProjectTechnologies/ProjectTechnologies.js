import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    technologies: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    gridContainer: {
        width: '75%'
    },
    gridItem: {
        textAlign: 'center',
    },
    technology: {
        padding: '.25em .5em',
        margin: '0 .25em',
        border: props => `1px solid ${props.color}`,
        color: props => props.color,
        fontFamily: 'Lato',
        fontWeight: '400',
        background: 'none',
        borderRadius: '5px'
    },
    '@media (max-width: 959px)': {
        gridContainer: {
            width: '90%'
        },
        technology: {
            fontSize: '.9rem'
        }
    },
    '@media (max-width: 768px)': {
        technology: {
            fontSize: '.7rem'
        }
    },
    '@media (max-width: 425px)': {
        technology: {
            fontSize: '.6rem'
        }
    }
});

const ProjectTechnologies = ({ technologies, color }) => {
    
    const classes = useStyles({ color });

    return (
        <div className={classes.technologies}>
            {technologies.map(technology => (
                <Typography key={technology} className={classes.technology} variant="body2" justify="center">{technology}</Typography>
            ))}
        </div>
    )
}

ProjectTechnologies.defaultProps = {
    color: myTheme.forthColor
}

export default ProjectTechnologies;