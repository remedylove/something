import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import HugeSection from '../../components/HugeSection/HugeSection';
import { myTheme } from '../../theme';

class ContactPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HugeSection 
                titleThin='OUR '
                titleBold='CONTACT'
                subtitle='Contact with our consultancy team'
                background={myTheme.tertiaryBgColor}
                colorOne={myTheme.primaryColor}
                colorTwo={myTheme.tertiaryColor}
                colorThree={myTheme.fifthColor}
                main="4.8em"
                childComponents={<Contact />} 
            />
        )
    }
}

export default ContactPage;