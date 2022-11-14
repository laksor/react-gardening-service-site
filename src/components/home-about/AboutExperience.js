import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AboutExperienceImg1 from '../../assets/images/about/4.jpg';

const AboutExperienceData = [
    
    {
        id: uuidv4(),
        heading: 'Mission',
        description: 'There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    },

    {
        id: uuidv4(),
        heading: 'Vision',
        description: 'It is a long established fact that a reader will be distracted by the content page when looking at its layout. The point of using Lorem Ipsum is that more-or-less normal distribution of letters,',
    },

    {
        id: uuidv4(),
        heading: 'Goal',
        description: 'It is a long established fact that a reader will be distracted by the content page when looking at its layout. The point of using Lorem Ipsum is that more-or-less normal distribution of letters,',
    },
    
];

const AboutExperienceItem = ({ heading, description, img }) => {
    return (
        <>
            <div className="single-experience">
                <h4>{heading}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

const AboutExperience = () => {
    return (
        <>
            <div className="experience-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>We Have 20 Years of Experience</span>
                                <h2>We Have 20+ years of Experience  in <br /> Landscape & Gardening Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-2 offset-lg-2 offset-md-2">
                            {AboutExperienceData.map((data) => (
                                <AboutExperienceItem
                                    key={data.id}
                                    heading={data.heading}
                                    description={data.description}
                                />
                            ))}
                        </div>
                        <div className="col-xl-6 col-lg-6 col-lg-6 pl-85 pr-0">
                            <div className="experience-img">
                                <img src={AboutExperienceImg1} alt="" />
                                <div className="experience-small-block">
                                    <h5>We are Since 2000 ! Over 200 Awards </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutExperience;