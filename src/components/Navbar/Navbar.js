import React from 'react';
import { Container, AppBar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'; 
import { myTheme } from '../../theme';

const useStyles = makeStyles({
    appBar: {
        background: myTheme.navbarColor,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5em 0',
    },
    title: {
        fontFamily: myTheme.secondaryFont,
        fontSize: '1.5rem'
    },
    logo: {
        color: myTheme.tertiaryColor,
        fontWeight: 'bold',
        textDecoration: 'none',
        marginRight: '2em',
        '&:hover': {
            color: myTheme.tertiaryColor,
            textDecoration: 'none'
        }
    },
    link: {
        color: myTheme.tertiaryColor,
        fontSize: '.9rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginRight: '2em',
        '&:hover': {
            color: myTheme.seventhColor,
            textDecoration: 'none'
        }
    },
    navContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
    },
    closeIcon: {
        color: '#fff'
    },
    burgerNavLinks: {
        display: 'none',
        opacity: 0,
        transition: '.5s ease-in-out',
        transitionDelay: '.5s'
    },
    menu: {
        display: 'none'
    },
    menuCross: {
        display: 'none'
    },
    menuLinks: {
        display: 'none'
    },
    navbar: {
        display: 'block',
        transition: '.5s ease-in-out'
    },
    '@media (max-width: 768px)': {
      AppBar: {
          padding: '.9em 0'
      },
      link: {
          fontSize: '3em',
          margin: '.25em auto',
      },
      menu: {
          display: 'block',
          color: myTheme.tertiaryColor
      },
      menuCross: {  
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '1em',
          marginTop: '1em',
      },
      navbar: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: myTheme.sixthColor,
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          transform: 'translateX(100%)',
      },
      navLinks: {
          display: 'none'
      },
      burgerNavLinks : {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
      },
    },
    '@media (max-width: 425px)': {
      link: {
          fontSize: '3em',
          margin: '.25em auto',
      },
    }
});

const Navbar = () => {
  
  const classes = useStyles();

  const hideMenu = () =>  {
    document.getElementById('burgerNavLinks').style.opacity = 0;
    document.getElementById('navbar').style.transform = 'translateX(100%)';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }

  const showMenu = () => {
    document.getElementById('navbar').style.transform = 'translateX(0)'
    document.getElementById('burgerNavLinks').style.opacity = 1;
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  return (
      <AppBar className={classes.appBar} position="fixed">
          <Container>
                  <div className={classes.navContainer}>
                    <Link className={classes.logo} to="/">
                      <Typography variant="h4" className={classes.title}>something.</Typography>
                    </Link>
                    <div id="navbar" className={classes.navbar}>
                      <div className={classes.menuCross}>
                        <IconButton onClick={hideMenu}>
                            <CloseIcon className={classes.closeIcon} />
                        </IconButton>
                      </div>
                      <div id="burgerNavLinks" className={classes.burgerNavLinks}>
                        <Link className={classes.link} onClick={hideMenu} to="/portfolio/">PORTFOLIO</Link>
                        <Link className={classes.link} onClick={hideMenu} to="/about">ABOUT</Link> 
                        <Link className={classes.link} onClick={hideMenu} to="/blog">BLOG</Link> 
                        <Link className={classes.link} onClick={hideMenu} to="/careers">CAREERS</Link> 
                        <Link className={classes.link} onClick={hideMenu} to="/contact">CONTACT</Link> 
                      </div>
                    </div>
                    <div id="navLinks" className={classes.navLinks}>
                        <Link className={classes.link} to="/portfolio/">PORTFOLIO</Link>
                        <Link className={classes.link} to="/about">ABOUT</Link> 
                        <Link className={classes.link} to="/blog">BLOG</Link> 
                        <Link className={classes.link} to="/careers">CAREERS</Link> 
                        <Link className={classes.link} to="/contact">CONTACT</Link> 
                    </div>
                    <IconButton className={classes.menu} onClick={showMenu}>
                      <MenuIcon />
                    </IconButton>
                  </div>
          </Container>
      </AppBar>
  );
}

export default Navbar;