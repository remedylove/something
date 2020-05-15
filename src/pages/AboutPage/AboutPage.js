import React, { Component } from 'react'
import SmallSection from '../../components/SmallSection/SmallSection';
import SectionText from '../../components/SectionText/SectionText';
import HugeSection from '../../components/HugeSection/HugeSection';
import MemberList from '../../components/MemberList/MemberList';
import AutoPlay from '../../components/Slider/Slider';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import Team from '../../assets/team.svg';
import { myTheme } from '../../theme';

class AboutPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <HugeSection 
                    titleThin='ABOUT '
                    titleBold='US' 
                    subtitle='Get to know us'
                    childComponents={<AboutCompany />}
                    main="4.8em" 
                />
                <SmallSection title="Our mission" titleColor={myTheme.tertiaryColor} background={myTheme.secondaryColor} childComponent={<SectionText color={myTheme.tertiaryColor} text="Our mission is to build digital products that last. By being reasonable product craftsmen, we're able to avoid surprises and focus on the quality of the software we deliver."/>} />
                <HugeSection
                    titleThin='OUR '
                    titleBold='TEAM'
                    subtitle='Let us introduce the team members'
                    childComponents={<MemberList />}
                />
                <SmallSection title="Not only work" childComponent={<AutoPlay />} />
                <HugeSection
                    titleThin='JOIN '
                    titleBold='TEAM'
                    subtitle="Don't hesitate, join our team now!"
                    childComponents={[
                        <SectionText text="Do you want to be a part of a seriously ambitious and vibrant team where you can have your say about how we get our job done? Check available positions!" color={myTheme.tertiaryColor} image={Team} />,
                        <ArrowButton text="CHECK" to="/careers" />
                    ]}
                    background={myTheme.tertiaryBgColor}
                    colorOne={myTheme.primaryColor}
                    colorTwo={myTheme.tertiaryColor}
                    colorThree={myTheme.fifthColor}
                />
            </>
        )
    }
}

export default AboutPage;