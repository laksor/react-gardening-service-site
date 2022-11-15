import React from 'react';
import {Link} from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import ProjectStyleFiveImg1 from '../../assets/images/project/garden-care.jpg';
import ProjectStyleFiveImg2 from '../../assets/images/project/tree-plantation.jpg';
import ProjectStyleFiveImg3 from '../../assets/images/project/watering.jpg';
import ProjectStyleFiveImg4 from '../../assets/images/project/commercial-gardening.jpg';
import ProjectStyleFiveImg5 from '../../assets/images/project/outdoor-scaping.jpg';
import ProjectStyleFiveImg6 from '../../assets/images/project/branch-cutting.jpg';

const ProjectsData = [
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg1,
        heading: 'Garden Care',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg2,
        heading: 'Tree Plantation',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg3,
        heading: 'Watering',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg4,
        heading: 'Commercial Gardening',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg5,
        heading: 'Outdoor Scaping',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleFiveImg6,
        heading: 'Branch Cutting',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },

];

const ProjectsItem = ({ img, heading, description, btnLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-project mb-25">
                    <div className="single-project-img bg-property bg-hover-style-1" style={{ backgroundImage: `url(${img})` }}>
                        <div className="single-project-img-icon">
                            <Link to={btnLink}><FaAngleDoubleRight /></Link>
                        </div>
                    </div>
                    <div className="single-project-content">
                        <h3>{heading}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <div className="project-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Our Project</span>
                                <h2>We have done more than 534+ <br /> successful projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-60">
                        {ProjectsData.map((data) => (
                            <ProjectsItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                btnLink={data.btnLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;