import React, { Component } from 'react'
import { Typography, Container, withStyles } from '@material-ui/core'
import { myTheme } from '../../theme';
import UnorderedList from '../UnorderedList/UnorderedList';

const styles = {
    title: {
        marginBottom: '2em'
    },
    name: {
        color: myTheme.secondaryColor,
        fontWeight: 'bold'
    },
    subtitle: {
        fontWeight: 'bold',
        color: myTheme.forthColor,
        margin: '2em 0',
    },
    '@media (max-width: 768px)': {
        container: {
            width: '100%'
        }
    }
};

class CareersDetails extends Component {
    constructor(props)  {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount = () => {
        window.scrollTo({left: 0, top: this.myRef.current.offsetTop, behavior: 'smooth'});
    }

    componentDidUpdate = () => {
        window.scrollTo({left: 0, top: this.myRef.current.offsetTop, behavior: 'smooth'});
    }

    render() {
        const { classes, chosenDetails } = this.props;
        const { name, benefits, responsibilities } = chosenDetails;

        return (
            <Container className={classes.container} ref={this.myRef}>
                <Typography className={classes.title} variant="h4">Position: <span className={classes.name}>{name}</span></Typography>
                <Typography className={classes.subtitle} variant="body1">What do we offer?</Typography>
                <UnorderedList list={benefits} />
                <Typography className={classes.subtitle} variant="body1">What do we expect?</Typography>
                <UnorderedList list={responsibilities} />
            </Container>
        )
    }
}

export default withStyles(styles)(CareersDetails);