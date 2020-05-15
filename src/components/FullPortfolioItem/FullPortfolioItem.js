import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Paper, Grid, makeStyles } from '@material-ui/core';
import FullPortfolioImage from '../FullPortfolioImage/FullPortfolioImage';
import FullPortfolioDescriptions from '../FullPortfolioDescriptions/FullPortfolioDescriptions';

const useStyles = makeStyles({
    paper: {
        marginTop: '2.5em',
        overflow: 'hidden'
    }
})

const FullPortfolioItem = ({ project, index }) => {

    const classes = useStyles();
    const { image, type, name, description, technologies  } = project;

    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{delay: 500}}
        >
            { props => (
                <div style={props}>
                    {index % 2
                    ? <Paper className={classes.paper} square>
                        <Grid container justify="center">
                            <FullPortfolioDescriptions type={type} name={name} description={description} technologies={technologies} />
                            <FullPortfolioImage image={image} />
                        </Grid>
                    </Paper>
                    : <Paper className={classes.paper} square>
                        <Grid container justify="center">
                            <FullPortfolioImage image={image} />
                            <FullPortfolioDescriptions type={type} name={name} description={description} technologies={technologies} />
                        </Grid>
                    </Paper>}
                </div>
            )}
        </Spring>
    )
}

export default FullPortfolioItem;