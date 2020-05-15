import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import { myTheme } from '../../theme';

const styles = {
    col3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    number: {
        fontWeight: 700,
        fontFamily: myTheme.primaryFont,
        color: myTheme.smallSectionElemsColor,
    },
    description: {
        fontSize: '.75rem',
        fontWeight: 300,
        fontFamily: myTheme.primaryFont,
        color: myTheme.smallSectionElemsColor,
    },
    gridContainer: {
        width: '90%',
        margin: '0 auto 2em'
    },
    '@media (max-width: 768px)': {
        Grid: {
            width: '100%'
        }
    }
};


class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }
    render() {
        const { classes } = this.props;
        const { active } = this.state;

        return (
            <VisibilitySensor 
                partialVisibility
                active={active}
                onChange={isVisible => isVisible && this.setState({ active: false })}
            >
                {({ isVisible }) => {
                    return(
                        <Spring
                            to={{
                                number: isVisible ? 150 : 0, 
                                number2: isVisible ? 500 : 0,
                                number3: isVisible ? 50 : 0, 
                                number4: isVisible ? 100 : 0}}
                            config={{duration: 2000}}    
                        >
                            { props => (
                                <div style={props}>
                                    <Grid className={classes.gridContainer} container spacing={2} justify="center">
                                        <Grid item xs={6} sm={5} md={3}>
                                            <div className={classes.col3}>
                                                <Typography className={classes.number} variant="h3">{Math.floor(props.number)}</Typography>
                                                <Typography className={classes.description} variant="body1">HIRED EMPLOYEES</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={5} md={3}>
                                            <div className={classes.col3}>
                                                <Typography className={classes.number} variant="h3">{Math.floor(props.number2)}K</Typography>
                                                <Typography className={classes.description} variant="body1">LINES OF CODE</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={5} md={3}>
                                            <div className={classes.col3}>
                                                <Typography className={classes.number} variant="h3">{Math.floor(props.number3)}</Typography>
                                                <Typography className={classes.description} variant="body1">PROJECTS DELIVERED</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={5} md={3}>
                                            <div className={classes.col3}>
                                                <Typography className={classes.number} variant="h3">{Math.floor(props.number4)}%    </Typography>
                                                <Typography className={classes.description} variant="body1">SATISFIED CLIENTS</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Spring>
                    )
                }}
            </VisibilitySensor>
        )
    }
}

export default withStyles(styles)(Counters);