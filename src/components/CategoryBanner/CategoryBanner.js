import React from 'react';
import { categories } from '../../store';
import { Button, Container, makeStyles } from '@material-ui/core';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2.5em'
    },
    category: {
        display: 'inline-block', 
        fontWeight: 'bold',
        color: myTheme.tertiaryColor,
        background: myTheme.secondaryColor,
        borderRadius: '5px',
        margin: '.5em',
        padding: '.5em 1em',
        '&:hover':  {
            background: myTheme.fifthColor,
            color: myTheme.secondaryColor
        }
    },
    active: {
        background: myTheme.forthColor,
        '&:hover':  {
            background: myTheme.forthColor,
            color: myTheme.tertiaryColor
        }
    }
})

const CategoryBanner = ({ currentCategory, onClick}) => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {categories.map(category => (
                category === currentCategory
                ? <Button className={`${classes.category} ${classes.active}`} onClick={e => onClick(category)}>{category}</Button>
                : <Button className={classes.category} onClick={e => onClick(category)}>{category}</Button>
            ))}
        </Container>
    );
}

export default CategoryBanner;