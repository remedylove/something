import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CareersPage from './pages/CareersPage/CareersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Error404Page from './pages/Error404Page/Error404Page';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/blog" component={BlogPage} exact />
            <Route path="/careers" component={CareersPage} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route component={Error404Page} />
          </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
