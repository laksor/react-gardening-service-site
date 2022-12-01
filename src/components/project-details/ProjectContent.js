import React from 'react';
import ProjectDetailsImg1 from '../../assets/images/project/project-details.jpg';
import ProjectDetailsImg2 from '../../assets/images/project/project-details-2.jpg';
import ProjectDetailsImg3 from '../../assets/images/project/project-details-3.jpg';
import ProjectFaq from './ProjectFaq';

const ProjectContent = () => {
    return (
        <div className="project-details-wrapper">
            <img src={ProjectDetailsImg1} className="mb-30" alt="" />
            <div className="row pl-10 pr-10 mb-45">
                <div className="col-xl-4 col-lg-4 col-md-4 pl-0 pr-0">
                    <div className="single-project-info theme-bg-3">
                        <span>Client Name</span>
                        <h6>Williamson</h6>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 pl-0 pr-0">
                    <div className="single-project-info bg-1">
                        <span>Project Value</span>
                        <h6>$900</h6>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 pl-0 pr-0">
                    <div className="single-project-info theme-bg-3">
                        <span>Date</span>
                        <h6>15 November 2022</h6>
                    </div>
                </div>
            </div>

            <h2 className="mb-30">Project Requirement</h2>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure itself,

                <br /> <br /> But because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, it is
                pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,

            </p>
            <h2 className="mt-40 mb-20">Analysis & Planning</h2>
            <p className="mb-45">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure because it is pleasure,</p>


            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <img src={ProjectDetailsImg2} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <img src={ProjectDetailsImg3} alt="" />
                </div>
            </div>

            <h2 className="mt-35 mb-40">Project Solution</h2>
            <ProjectFaq />
        </div>
    )
}

export default ProjectContent;