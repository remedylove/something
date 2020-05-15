import React from 'react';
import { Grid, Container, Card, CardMedia, CardHeader, CardContent, makeStyles, CardActions, Avatar, Typography } from '@material-ui/core';
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    card: {
        '&:hover':  {
            '& $justForBorder':    {
                opacity: 1,
                transform: 'translateX(0)'
            },
            '& $arrow': {
                opacity: 1
            }
        }
    },
    cardContent: {
        paddingTop: 0,
        paddingBottom: 0
    },
    media: {
        height: 0,
        paddingTop: '65%',
        transition: '.5s ease-in-out',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    postTitle: {
        fontFamily: myTheme.primaryFont, 
        fontWeight: 700,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    postContent: {
        fontFamily: myTheme.primaryFont,
        color: '#707070',
        fontWeight: 300
    },
    authorString: {
        fontSize: '.6rem',
        fontWeight: 'bold',
        color: myTheme.forthColor, 
        marginBottom: '.5em'
    },
    avatarImage: {
        maxWidth: '100%',
    },
    authorName: {
        fontSize: '.75rem',
        fontWeight: 'bold',
        margin: '0 .5em'
    },
    date: {
        fontSize: '.75rem', 
        color: myTheme.forthColor
    },
    linkWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    details: {
        fontSize: '.75rem',
    },
    arrow: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: myTheme.secondaryColor,
        background: 'transparent',
        // border: `1px solid ${myTheme.secondaryBgColor}`,
        border: 'none',
        borderRadius: '5px',
        padding: '.5em',
        marginTop: '.5em',
        transition: '.5s ease',
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            cursor: 'pointer',
            background: myTheme.secondaryBgColor
        }
    },
    postFooterWrapper: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    postFooter: {
        display: 'flex', 
        alignItems: 'center'
    },
    postCategory: {
        display: 'inline-block', 
        fontSize: '.6rem', 
        fontWeight: 'bold',
        color: myTheme.forthColor,
        border: `1px solid ${myTheme.forthColor}`,
        borderRadius: '5px',
        padding: '.5em 1em',
        textTransform: 'uppercase'
    },
    justForBorder: {
        width: '100%',
        borderBottom: `2px solid ${myTheme.sixthColor}`,
        transition: '1s ease-in-out',
        transform: 'translateX(-100%)'
    }
})

const Post = ({ post }) => {
    const { title, image, content, avatar, date, author, category } = post;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.card} square>
                <CardMedia 
                    className={classes.media}
                    image={image}
                />
                <Container>
                    <CardHeader 
                        title={
                            <Typography className={classes.postTitle} variant="h5">{title}</Typography>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.postContent} variant="body1" align="justify">{content}</Typography>
                        <div className={classes.linkWrapper}>
                            <button className={classes.arrow}><span className={classes.details}>READ MORE</span></button>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div style={{width: '100%'}}>
                            <Typography className={classes.authorString} variant="body2">AUTHOR</Typography>
                            <div className={classes.postFooterWrapper}>
                                <div className={classes.postFooter}>
                                    <Avatar>
                                        <img className={classes.avatarImage} src={avatar} alt="" />
                                    </Avatar>
                                    <Typography className={classes.authorName} variant="h6">{author}</Typography>
                                    <Typography className={classes.date} variant="h6">{date}</Typography>
                                </div>
                                <h3 className={classes.postCategory} variant="body2">{category}</h3>
                            </div>
                        </div>
                    </CardActions>
                </Container>
                <div className={classes.justForBorder}></div>
            </Card>
        </Grid>
    )
}

export default Post;