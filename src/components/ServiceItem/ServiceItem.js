import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';
import { Spring } from 'react-spring/renderprops';
import { myTheme } from '../../theme';

const styles = {
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em'
    },
    image: {
        maxWidth: '25%'
    },
    name: {
        fontWeight: 'bold',
        color: myTheme.forthColor
    }
};

class ServiceItem extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            active: true
        }
    }

    render()    {
        const { active } = this.state;
        const { classes, service, index } = this.props;
        const { name, image } = service;
        // const delay = 500 * index;
        return (
            <Grid item md={4}>
                <VisibilitySensor 
                        partialVisibility
                        active={active}
                        onChange={isVisible => isVisible && this.setState({ active: false })}
                    >
                        {({ isVisible }) => (
                            <Spring
                                to={{opacity: isVisible ? 1 : 0}}
                                config={{delay: 500 * index}}
                            >
                                { props => (
                                    <div className={classes.gridItem} style={props}>
                                        <img className={classes.image} src={image} alt="" />
                                        <Typography className={classes.name} variant="body1">{name}</Typography>
                                    </div>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
            </Grid>
        )
    }
}

export default withStyles(styles)(ServiceItem);
