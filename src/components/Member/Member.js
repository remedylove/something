import React from 'react';
import { makeStyles, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Male from '../../assets/male.jpg';
import Female from '../../assets/female.jpg';

const useStyles = makeStyles({
    card: {
        '&:hover': {
            '& $media': {
                opacity: 1
            },
        }
    },
    media: {
        opacity: .25,
        transition: '1s ease',
    },
    position: {
        color: '#707070'
    }
})

function Member({ employee }) {
    const { id, name, position, gender, } = employee;
    const classes = useStyles();
    
    return (
        <Grid key={id} item xs={6} sm={6} md={3}>
            <Card className={classes.card} square>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={gender === 'male' ? Male : Female }
                />
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography className={classes.position}>{position}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Member;