import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
      // It sets Lato as a default font for Typography component
      fontFamily: 'Lato'
    },
})

export const myTheme = {
    //Fonts
    primaryFont: ['Lato', 'sans-serif'],
    secondaryFont: ['Ubuntu', 'sans-serif'],

    //Navbar background color
    navbarColor: '#5231D3',
    
    //Colors applied for huge sections' titles
    primaryColor: '#000',
    secondaryColor: '#7556EE',
    tertiaryColor: '#fff',
    forthColor: '#707070',
    fifthColor: '#ccc',
    sixthColor: '#5231D3',
    seventhColor: '#967BFF',
    
    //Colors of small sections' elements
    smallSectionElemsColor: '#707070',

    //Colors of sections' background
    primaryBgColor: '#fff',
    secondaryBgColor: '#f2f2f2',
    tertiaryBgColor: '#7556ee',
};