import React, { Component } from 'react';
import HugeSection from '../../components/HugeSection/HugeSection';
import FullPortfolio from '../../components/FullPortfolio/FullPortfolio';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import SmallSection from '../../components/SmallSection/SmallSection';
import AutoPlay from '../../components/Slider/Slider';
import LetUsKnow from '../../components/LetUsKnow/LetUsKnow';
import { projects } from '../../store';
import { myTheme } from '../../theme';

class PortfolioPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            amount: 2,
            maxAmount: projects.length,
        }
    }

    componentDidMount = () =>   {
        window.scrollTo(0, 0);
    }

    extendPortfolio = () => {
        this.setState(prevState => ({
            ...prevState,
            amount: prevState.amount + 2,
        }));
    }

    get isDisabled() {
        const { amount, maxAmount } = this.state;
        return amount >= maxAmount;
    }

    render() {
        const { amount } = this.state;
        return (
            <>
                <HugeSection 
                    titleThin='OUR '
                    titleBold='PORTFOLIO'
                    subtitle="We're proud of projects we made"
                    main="4.8em"
                    childComponents={[
                        <FullPortfolio key={1} projects={projects} amount={amount}/>, 
                        <ArrowButton key={2} text="LOAD MORE" to='/portfolio' onClick={this.extendPortfolio} isDisabled={this.isDisabled} />
                        ]} 
                />
                <SmallSection title="Not only work" childComponent={<AutoPlay />} />
                <HugeSection
                    titleThin='LET US '
                    titleBold='KNOW'
                    subtitle='If you want us to build your product, contact with us!'
                    childComponents={[
                        <LetUsKnow key={1} />,
                        <ArrowButton key={2} text="CONTACT" to="/contact" />
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

export default PortfolioPage;