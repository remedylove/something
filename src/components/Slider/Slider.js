import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import Slider from "react-slick";
import { sliderPics } from '../../store';

const styles = {
  photoSlider: {
    overflow: 'hidden'
  },
  image: {
    maxWidth: '100%'
  },
  sliderWrapper: {
    overlow: 'hidden'
  }
};

class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    const { classes } = this.props;

    return (
      <div className={`photoSlider ${classes.sliderWrapper}`} >
        <Slider {...settings}>
          {sliderPics.map(sliderPic => (
            <div key={sliderPic} className="photo-slide">
              <img className={classes.image} src={sliderPic} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(AutoPlay);