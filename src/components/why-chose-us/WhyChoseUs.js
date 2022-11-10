import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WhyChooseUsBg from '../../assets/images/why-choose-us/bg-2.jpg';
import Icon_Estimates from '../../assets/images/why-choose-us/estimates.png';
import Icon_Equipment from '../../assets/images/why-choose-us/equipment.png';
import Icon_Work from '../../assets/images/why-choose-us/work.png';
import Icon_Irreigation from '../../assets/images/why-choose-us/irreigation.png';

const WhyChooseUsData = [
    {
        id: uuidv4(),
        heading: 'Free Estimates',
        description: 'There are many variations of passages the majority have suffered alteration form',
        img: Icon_Estimates,
    },
    {
        id: uuidv4(),
        heading: 'Modern Equipment',
        description: 'There are many variations of passages the majority have suffered alteration form',
        img: Icon_Equipment,
    },
    {
        id: uuidv4(),
        heading: 'Quality Work',
        description: 'There are many variations of passages the majority have suffered alteration form',
        img: Icon_Work,
    },
    {
        id: uuidv4(),
        heading: 'Watering & Irrigation',
        description: 'There are many variations of passages the majority have suffered alteration form',
        img: Icon_Irreigation,
    },

];

const WhyChooseUsItem = ({ heading, description, img }) => {
    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-choose-us">
                    <div className="single-choose-us-content bb-1 b-color-2">
                        <h3>{heading}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="single-choose-us-icon">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

const WhyChoseUs = () => {
    return (
        <>
            <div className="height-592 bg-property pt-110 pb-110" data-overlay="1" data-opacity="7" style={{ backgroundImage: `url(${WhyChooseUsBg})` }}>
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Why Choose US</span>
                                <h2 className="white-color">Experience the Ultimate Level of <br /> Landscape & Gardening Power</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        {WhyChooseUsData.map((data) => (
                            <WhyChooseUsItem
                                key={data.id}
                                heading={data.heading}
                                description={data.description}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoseUs;