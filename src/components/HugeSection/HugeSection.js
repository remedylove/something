import React from 'react';
import { makeStyles } from '@material-ui/core';
import SectionHeader from '../SectionHeader/SectionHeader';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    container: {
        background: ({ background }) => background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        padding: '5em 0',
        marginTop: ({ main }) => main,
        overflow:'hidden'
    },
    '@media (max-width: 425px)': {
        container: {
            padding: '2em 0'
        }
    }
});

const HugeSection = ({ titleThin, titleBold, subtitle, childComponents, background, colorOne, colorTwo, colorThree, main }) => {
    
    const classes = useStyles({ background, main });

    return (
        <div className={classes.container}>
            <SectionHeader titleThin={titleThin} titleBold={titleBold} subtitle={subtitle} colorOne={colorOne} colorTwo={colorTwo} colorThree={colorThree}/>
            {childComponents}
        </div>
    )
}

HugeSection.defaultProps = {
    background: myTheme.secondaryBgColor,
}

export default HugeSection;