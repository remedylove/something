import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import Work from '../../assets/work.jpg';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    container: {
        color: myTheme.tertiaryColor,
        padding: '10em 0',
        background: `linear-gradient(rgba(117, 86, 238, 0.75), rgba(0, 0, 0, 0.75)), url(${Work})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: '0 70%',
        backgroundSize: 'cover',
        marginTop: '4.8em'
    },
    Typography: {
        margin: 0,
        padding: 0,
        color: myTheme.tertiaryColor,
        fontFamily: myTheme.primaryFont,
        fontSize: '5rem',
        fontWeight: '100'
    },
    span: {
        color: myTheme.secondaryColor,
        fontWeight: '700'

    },
    '@media (max-width: 768px)': {
        Typography: {
            fontSize: '4em'
        },
        container: {
            padding: '5em 0'
        }
    }
});

const WelcomeSection = ({ texts }) => {
    
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <Spring 
                from={{marginTop: -500}}
                to={{marginTop: 0}}
                config={{duration: 1000, delay: 500}}    
            >
                { props => (
                    <div style={props}>
                        <Typography className={classes.Typography} variant="h2" align="center">{texts[0]}</Typography>
                    </div>
                )}
            </Spring>
            <Spring 
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{duration: 1000, delay: 2000}}    
            >
                { props => (
                    <div style={props}>
                        <Typography className={classes.Typography} variant="h2" align="center">{texts[1]}<span className={classes.span}>{texts[2]}</span></Typography>
                    </div>
                )}
            </Spring>
        </div>
    );
}

export default WelcomeSection;