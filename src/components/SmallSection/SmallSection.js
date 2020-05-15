import React from 'react';
import { myTheme } from '../../theme';
import { makeStyles, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        background: ({ background }) => background,
        paddingBottom: '2em',
        overflow: 'hidden'
    },
    containerHor: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    justForLine: {
        borderBottom: ({ titleColor }) => `1px solid ${titleColor} `,
        width: '5em'
    },
    technologiesTitle: {
        fontFamily: myTheme.primaryFont,
        color: ({ titleColor }) => titleColor,
        fontWeight: 700,
        margin: '2em'
    },
});

const SmallSection = ({ title, titleColor, childComponent, background }) => {
    const classes = useStyles({ background, titleColor });

    return (
        <div className={classes.container}>
            <div className={classes.containerHor}>
                <div className={classes.justForLine}></div>
                <Typography className={classes.technologiesTitle} variant="body1">{title}</Typography>
            </div>
            <Container>
                {childComponent}
            </Container>
        </div>
    )
}

SmallSection.defaultProps = {
    background: myTheme.primaryBgColor,
    titleColor: myTheme.smallSectionElemsColor
}

export default SmallSection;