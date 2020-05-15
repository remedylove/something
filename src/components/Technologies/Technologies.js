import React from 'react';
import { makeStyles, Grid} from '@material-ui/core';
import { technologies } from '../../store';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: 0,
        marginBottom: '1em',
        overflowX: 'hidden'
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    technologyLogo: {
        width: '70%'
    }
});

const Technologies = () => {
    
    const classes = useStyles();

    return (
        <Grid className={classes.gridContainer} container justify="center">
            {technologies.map((technology, index) => (
                <Grid key={index} className={classes.gridItem} item xs={4} sm={2} md={2}>  
                    <img className={classes.technologyLogo} src={technology} alt="something" />
                </Grid>    
            ))}
        </Grid>
    )
}

export default Technologies;