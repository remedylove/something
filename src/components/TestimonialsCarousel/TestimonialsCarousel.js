import React, { Component } from "react";
import '../../App.css';
import Slider from "react-slick";
import Testimonial from '../Testimonial/Testimonial';
import { testimonials } from '../../store';

class CenterMode extends Component {
  render() {

    const settings = {
      className: "center testimonialSlider",
      arrows: false,
      centerMode: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: false,
      centerPadding: '20%',
      slidesToShow: 1,
      speed: 2000,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            centerPadding: '10%'
          }
        },
        {
          breakpoint: 769,
          settings: {
            centerPadding: 0
          }
        }
      ]
    };

    return (
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div className="testimonial-slide" key={testimonial.id}>
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default CenterMode;