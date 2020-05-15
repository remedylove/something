import React from 'react';
import { makeStyles, Container, Typography, IconButton } from '@material-ui/core';
import { myTheme } from '../../theme';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footerWrapper: {
        background: myTheme.primaryBgColor,
        width: '100%',
        paddingTop: '1em'
    },
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerLinks: {
        display: 'flex',
        margin: '0 1em 1em'
    },
    link: {
        color: myTheme.forthColor,
        fontSize: '.9rem',
        textDecoration: 'none',
        marginRight: '2em',
        '&:hover': {
            color: myTheme.seventhColor,
            textDecoration: 'none'
        }
    },
    copyright: {
        color: myTheme.forthColor,
        fontSize: '.9rem', 
        marginBottom: '1em',
    },
    logo: {
        fontFamily: myTheme.secondaryFont,
        color: myTheme.forthColor
    },
    socialsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        color: myTheme.forthColor,
        '&:hover': {
            color: myTheme.secondaryColor
        }
    },
    '@media (max-width: 768px)': {
        footerContainer: {
            flexDirection: 'column',
            justifyContent: 'center'
        },
        link:   {
            margin: '0 .5em'
        },
        footerLinks: {
            margin: '.5em auto'
        },
        copyright: {
            margin: '.5em auto'
        }
    }
});

function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.footerWrapper}>
            <Container>
                <div className={classes.socialsWrapper}>
                        <Typography className={classes.logo} variant="h4">something.</Typography>
                    <div className={classes.socials}>
                        <IconButton className={classes.socialIcon}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton className={classes.socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={classes.socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton className={classes.socialIcon}>
                            <LinkedInIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.footerContainer}>
                    <div className={classes.footerLinks}>
                        <Link className={classes.link} to="/portfolio">Portfolio</Link>
                        <Link className={classes.link} to="/about">About</Link> 
                        <Link className={classes.link} to="/blog">Blog</Link> 
                        <Link className={classes.link} to="/careers">Careers</Link> 
                        <Link className={classes.link} to="/contact">Contact</Link> 
                    </div>
                    <Typography className={classes.copyright}>© Copyright by RemedyLove</Typography>
                </div>
            </Container>
        </div>
    )
}

export default Footer;