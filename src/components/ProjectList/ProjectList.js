import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SingleProject from '../SingleProject/SingleProject';
import { projects } from '../../store';

const styles = {
    gridContainer: {
        width: '90%',
        margin: '0 auto 2em',
        overflowX: 'hidden'
    },
    '@media (max-width: 768px)': {
        gridContainer: {
            width: '100%',
            marginBottom: 0
        }
    }
}

const useStyles = makeStyles(styles);

const ProjectList = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.gridContainer} container spacing={0} justify="center">
            {projects.map(project =>(
                <SingleProject key={project.name} project={project} />
            ))}
        </Grid>
    )
}

export default ProjectList;