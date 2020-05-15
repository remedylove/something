import React, { Component } from 'react';
import HugeSection from '../../components/HugeSection/HugeSection';
import ValueList from '../../components/ValueList/ValueList.js';
import Services from '../../components/Services/Services';
import CareersList from '../../components/CareersList/CareersList';
import CareersDetails from '../../components/CareersDetails/CareersDetails';
import SmallSection from '../../components/SmallSection/SmallSection';
import ApplySection from '../../components/ApplySection/ApplySection'; 
import { myTheme } from '../../theme';

class CareersPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            chosenDetails: undefined
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleCareersItem = chosenDetails =>  {
        this.setState({
            chosenDetails
        });
    }

    render() {
        const { chosenDetails } = this.state;

        return (
            <>
                <HugeSection
                    titleThin='OUR '
                    titleBold='VALUES'
                    subtitle="Before you apply, check what we appreciate the most"
                    main="4.8em"
                    childComponents={<ValueList />}
                />
                <SmallSection title="Our services" childComponent={<Services />} />
                <HugeSection 
                    titleThin='JOIN '
                    titleBold='US'
                    subtitle="Don't hesitate, join our team now!"
                    childComponents={<CareersList handleCareersItem={this.handleCareersItem} chosenDetails={chosenDetails} />}
                />               
                {chosenDetails && <SmallSection title='About position' childComponent={<CareersDetails chosenDetails={chosenDetails} />} />}
                <HugeSection
                    titleThin='APPLY '
                    titleBold='NOW'
                    subtitle="Let's begin your adventure with something."
                    background={myTheme.tertiaryBgColor}
                    colorOne={myTheme.primaryColor}
                    colorTwo={myTheme.tertiaryColor}
                    colorThree={myTheme.fifthColor}
                    childComponents={<ApplySection />}
                />
            </>
        )
    }
}

export default CareersPage;