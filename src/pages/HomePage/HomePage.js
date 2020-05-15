import React, { Component } from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import Technologies from '../../components/Technologies/Technologies';
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel';
import Counters from '../../components/Counters/Counters';
import ProjectList from '../../components/ProjectList/ProjectList';
import ServiceCardList from '../../components/ServiceCardList/ServiceCardList';
import HugeSection from '../../components/HugeSection/HugeSection';
import SmallSection from '../../components/SmallSection/SmallSection';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <WelcomeSection texts={['hello.', 'we are ', 'something.']}/>
                <HugeSection 
                    titleThin='OUR '
                    titleBold='SERVICES'
                    subtitle='Check out the services we offer'
                    childComponents={<ServiceCardList />} 
                />
                <SmallSection 
                    title="Technologies we're experts in"
                    childComponent={<Technologies />}
                />
                <HugeSection 
                    titleThin='OUR '
                    titleBold='WORK'
                    subtitle='We provide best products'
                    childComponents={[<ProjectList key={1} />, <ArrowButton key={2} text="FULL PORTFOLIO" to="/portfolio" />]} 
                />
                <SmallSection 
                    title='Statistics'
                    childComponent={<Counters />} 
                />
                <HugeSection    
                    titleThin='OUR '
                    titleBold='REVIEWS'
                    subtitle="Let's see what our clients say about our work"
                    childComponents={<TestimonialsCarousel />}
                />
            </div>
        )
    }
}

export default HomePage;