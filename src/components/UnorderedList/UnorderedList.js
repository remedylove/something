import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    listItem: {
        color: '#707070', 
        margin: '.5em'
    }
})

const UnorderedList = ({ list }) => {

    const classes = useStyles();

    return (
        <Container>
            {list.map(item => (
                <li className={classes.listItem}>{item}</li>
            ))}
        </Container>
    )
}

export default UnorderedList
