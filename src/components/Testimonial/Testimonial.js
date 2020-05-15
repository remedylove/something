import React, { Component } from 'react';
import { Paper, Typography, Avatar, Icon, withStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { myTheme } from '../../theme';

const styles = {
    paper: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flexStart', 
        height: '15em', 
        margin: '0 5em', 
        padding: '3.5em',
    },
    grade: {
        display: 'flex', 
        alignItems: 'center', 
        fontSize: '.9rem'
    },
    gradeValue: {
        fontWeight: 'bold', 
        fontSize: '1rem'
    },
    stars: {
        color: myTheme.sixthColor,
        fontSize: '.8rem',
        marginLeft: '.25rem'
    },
    deliveredProduct: {
        color: myTheme.forthColor,
        fontSize: '.6rem',
        fontWeight: 'bold',
        border: `1px solid ${myTheme.forthColor}`,
        borderRadius: '5px',
        padding: '.5em 1em',
        margin: '.25em auto',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    testimonialHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    testimonialHeaderWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    authorSection: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: 'inherit'
    },
    avatarImage: {
        maxWidth: '100%',
    },
    authorName: {
        fontSize: '.75rem', 
        fontWeight: 'bold',
        margin: '0 .5em'
    },
    positionName: {
        color: myTheme.forthColor,
        fontFamily: myTheme.primaryFont, 
        fontSize: '.6rem', 
        fontWeight: 900, 
        margin: '0 .5em',
        textTransform: 'uppercase'
    },
    justforBorder: {
        height: '25px',
        width: '75px',
        borderLeft: `1px solid ${myTheme.forthColor}`,
        borderTop: `1px solid ${myTheme.forthColor}`
    },
    content: {
        fontWeight: 'bold',
        fontFamily: myTheme.primaryFont
    },
    '@media (max-width: 768px)': {
        paper: {
            height: '10em',
            margin: '0 2.5em',
            padding: '3.5em'
        },
        avatarImage: {
            maxWidth: '80%',
        },
        authorName: {
            fontSize: '.65rem'
        },
        positionName: {
            fontSize: '.5rem'
        },
        grade: {
            fontSize: '.85rem'
        },
        deliveredProduct: {
            fontSize: '.5rem'
        },
        content: {
            fontSize: '1.25rem'
        }
    },
    '@media (max-width: 425px)': {
        paper: {
            margin: '0 1em',
            padding: '2em'
        },
        content: {
            fontSize: '1rem'
        },
        grade: {
            fontSize: '.75rem'
        }
    }
};

class Testimonial extends Component {
    
    constructor(props)  {
        super(props);
        this.state = {
            stars: this.renderStars(this.props.testimonial.grade)
        }
    }

    renderStars = grade => {
        let j = 0;
        const stars = [];

        while(stars.length < 5) {
            for(j = 0; j < grade; j++)  {
                stars.push(<Icon key={j}><StarIcon fontSize="small"/></Icon>);
            }
            if(j < 5)   {
                j++;
                stars.push(<Icon key={j}><StarBorderIcon fontSize="small"/></Icon>);
            }
        }

        return stars;
    }

    render()    {
        const { classes, testimonial } = this.props;
        const { content, author, avatar, position, company, grade, deliveredProduct } = testimonial;
        const { stars } = this.state;

        return (
            <Paper className={classes.paper} square>
                <div className={classes.testimonialHeaderWrapper}>
                    <div className={classes.testimonialHeader}>
                        <Avatar>
                            <img className={classes.avatarImage} src={avatar} alt="" />
                        </Avatar>
                        <div className={classes.authorSection}>
                            <Typography className={classes.authorName} variant="h5">{author}</Typography>
                            <Typography className={classes.positionName} variant="h5">{position} IN {company}</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography className={classes.deliveredProduct} variant="body2">{deliveredProduct}</Typography>
                    </div>
                </div>
                <Typography className={classes.grade}>{grade.toFixed(1)}<span className={classes.stars}>{stars}</span></Typography>
                <Typography className={classes.content} variant="h5" align="left">{content}</Typography>
            </Paper>
        );
    }
}

export default withStyles(styles)(Testimonial);