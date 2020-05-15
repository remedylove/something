import React, { Component } from 'react';
import HugeSection from '../../components/HugeSection/HugeSection';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import PostList from '../../components/PostList/PostList';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import { posts } from '../../store';

class BlogPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            currentCategory: 'all',
            amount: 4,
            maxAmount: posts.length
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    setCurrentCategory = (currentCategory) => {
        const maxAmount = currentCategory === 'all'
            ? posts.length 
            : posts.filter(post => (post.category === currentCategory)).length;

        this.setState({
            currentCategory,
            amount: 4,
            maxAmount,
        });
    }

    extendBlogList = () =>  {
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
        const { currentCategory, amount } = this.state;
        console.log(currentCategory);
        return (
            <HugeSection
                titleThin='OUR '
                titleBold='BLOG'
                subtitle='Check posts prepared by our team'
                childComponents={[
                    <CategoryBanner currentCategory={currentCategory} onClick={this.setCurrentCategory} />,
                    <PostList currentCategory={currentCategory} amount={amount} setMaxAmount={this.setMaxAmount} onClick={this.setCurrentCategory} />, 
                    <ArrowButton text="LOAD MORE" onClick={this.extendBlogList} isDisabled={this.isDisabled} />
                ]}
                main="4.8em"
            />
        )
    }
}

export default BlogPage;