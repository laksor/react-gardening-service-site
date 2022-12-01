import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import TestimonialImg1 from '../../assets/images/testimonial/1.jpg';
import TestimonialImg2 from '../../assets/images/testimonial/2.jpg';
import TestimonialImg3 from '../../assets/images/testimonial/3.jpg';
import TestimonialImg4 from '../../assets/images/testimonial/4.jpg';
import TestimonialImg5 from '../../assets/images/testimonial/5.jpg';

const TestimonialData = [
    
    {
        id: uuidv4(),
        img: TestimonialImg1,
        name: 'Adam panther',
        position: 'Founder, Wakanda',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialImg2,
        name: 'Andrew',
        position: 'Founder, Wakanda',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialImg3,
        name: 'Natalia',
        position: 'Founder, Wakanda',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialImg4,
        name: 'Andrew',
        position: 'Founder, Wakanda',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialImg5,
        name: 'Adam panther',
        position: 'Founder, Wakanda',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
];

const TestimonialItem = ({ img, name, position, description }) => {
    return (
        <>
            <div className="single-testimonial">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <span>{position}</span>
                <p>{description}</p>
                <div className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </>
    )
}

const Testimonial = () => {
    const TestimonialSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="testimonial-area bg-4 pt-90 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Happy Customers</span>
                                <h2>What Our Customer Says <br /> About Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...TestimonialSlider} className="testimonial-slider">
                            {TestimonialData.map((data) => (
                                <TestimonialItem
                                    key={data.id}
                                    img={data.img}
                                    name={data.name}
                                    position={data.position}
                                    description={data.description}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;