import React from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardMedia, CardActions, Link, makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    gridItem: {
        minHeight: '100%',
    },
    card: {
        height: '100%'
    },
    cardHeader: {
        fontWeight: 'bold'
    },
    title: {
        fontFamily: myTheme.primaryFont,
        color: myTheme.primaryColor,
        fontWeight: 100,
    },
    titleSpan: {
        color: myTheme.secondaryColor,
        fontWeight: 700,
    },
    subtitle: {
        fontFamily: myTheme.secondaryFont,
        color: myTheme.forthColor,
        fontWeight: 100,
        letterSpacing: '5px',
        marginTop: '2em',
    },
    media: {
        width: '75%',
        margin: '0 auto',
        paddingTop: '2em',
        maxWidth: '250px'
    },
    description: {
      fontFamily: myTheme.primaryFont, 
      fontWeight: 300,
      width: '90%',
      margin: '0 auto',
    },
    cardFooter: {
        paddingBottom: '2em',
    },
    linkWrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '&:hover': {
            '& $arrow': {
                color: myTheme.forthColor,
                transform: 'translateX(5px)'
            },
            '& $linkContent': {
                cursor: 'pointer',
                color: myTheme.forthColor,
            },
            '& $Link': {
                textDecoration: 'none'
            }
        }
    },
    link: {
        textDecoration: 'none',
        transition: '.5s ease',
        '&:hover':  {
            textDecoration: 'none'
        }
    },
    linkContent: {
        fontFamily: myTheme.primaryFont, 
        color: myTheme.secondaryColor,
        fontWeight: 700,
        margin: '0 auto',
        transition: '.5s ease',
    },
    arrow: {
        color: myTheme.secondaryColor,
        transition: '.5s ease',
        verticalAlign: 'auto',
        marginTop: '3px'
    },
    '@media (max-width: 768px)': {
        title: {
            fontSize: '4em'
        },
        Grid: {
            marginTop: '2.5em'
        },
        arrow: {
            marginTop: 0
        }
    },
});

const ServiceCard = ({ service }) => {

    const classes = useStyles();
    return (
        <Grid className={classes.gridItem} item xs={10} sm={8} md={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={service.image}
                />
                <CardHeader
                    title={<Typography className={classes.cardHeader} variant="h6" align="center" >{service.name}</Typography>}
                />
                <CardContent>
                    <Typography className={classes.description} align="justify">{service.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardFooter}>
                    <div className={classes.linkWrapper}>
                        <Link className={classes.link}><span className={classes.linkContent} align="justify">{service.linkText}</span></Link>
                        <ArrowRightAltIcon className={classes.arrow} fontSize="small" />
                    </div>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ServiceCard;