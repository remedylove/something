import React from 'react';
import { Grid,Typography, makeStyles } from '@material-ui/core';
import { myTheme } from '../../theme';
import ProjectTechnologies from '../ProjectTechnologies/ProjectTechnologies';


const useStyles = makeStyles({
    title: {
        color: myTheme.primaryBgColor
    },
    description: {
        color: myTheme.forthColor, 
        fontSize: '.75rem',
        fontFamily: 'Montserrat',
        fontWeight: 900,
        margin: '.25em auto 1em'
    },
    gridItem: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        '&:hover': {
            '& $overlay': {
                opacity: 1,
                visibility: 'visible',
                '& $content': {
                    opacity: 1,
                    visibility: 'visible',
                    transitionDelay: '250ms'
                },
            },
        }
    },
    projectImage: {
        display: 'block',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        transition: '1s ease-in-out',
    },
    overlay: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, .9)',
        opacity: 0,
        visibility: 'hidden',
        transition: '1s ease-in-out',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        opacity: 0,
        transition: '1s ease-in-out',
    },
    '@media (max-width: 425px)': {
        title: {
            fontSize: '2em'
        },
        description: {
            fontSize: '.5rem',
            margin: '.75em auto'
        }
    }
});

const SingleProject = ({ project }) => {

    const classes = useStyles();
    const { name, type, image, technologies } = project;

    return (
        <Grid className={classes.gridItem} item xs={12} sm={10} md={6} >
            <img className={classes.projectImage} src={image} alt="something" />
            <div className={classes.overlay}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="h4" align="center">{name}</Typography>
                    <Typography className={classes.description} align="center" variant="body1">{type.toUpperCase()}</Typography>
                    <ProjectTechnologies technologies={technologies} color="#a9a9a9" />
                </div>
            </div>
        </Grid>
    )
}

export default SingleProject;