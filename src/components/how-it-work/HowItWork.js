import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { FaPlus } from 'react-icons/fa';
import PreparationPhase from '../../assets/images/how-it-works/preparation-phase.png';
import DesignProposal from '../../assets/images/how-it-works/design-proposal.png';
import StartPlanting from '../../assets/images/how-it-works/start-planting.png';
import EnjoyTheLandscape from '../../assets/images/how-it-works/enjoy-the-landscape.png';
import HowItWorkImg1 from '../../assets/images/how-it-works/1.jpg';
import HowItWorkImg2 from '../../assets/images/how-it-works/2.jpg';
import HowItWorkImg3 from '../../assets/images/how-it-works/3.jpg';
import HowItWorkImg4 from '../../assets/images/how-it-works/4.jpg';

const HowItWork = () => {
    return (
        <>
            <div className="how-it-works bg-4 pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>See How it Works!</span>
                                <h2>How we works
                                    <br /> Landscape Gardening</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Tab.Container defaultActiveKey="first">
                            <div className="row">
                                <div className="works-menu text-center mb-50">
                                    <Nav variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <span className="works-icon">
                                                    <img src={PreparationPhase} alt="" />
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <span className="works-icon">
                                                    <img src={DesignProposal} alt="" />
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <span className="works-icon">
                                                    <img src={StartPlanting} alt="" />
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="four">
                                                <span className="works-icon">
                                                    <img src={EnjoyTheLandscape} alt="" />
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Preparation Phase</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg1} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Design Proposal</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg2} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Start Planting</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg3} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Enjoy the Landscape</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg4} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Enjoy the Landscape</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg4} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Design Proposal</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg2} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Preparation Phase</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg1} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Start Planting</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg3} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Start Planting</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg3} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Enjoy the Landscape</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg4} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Preparation Phase</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg1} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Design Proposal</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg2} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Start Planting</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg3} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Enjoy the Landscape</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg4} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Design Proposal</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg2} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                <div className="works-content-wrapper text-center">
                                                    <h3>Preparation Phase</h3>
                                                    <div className="works-img bg-hover-style-1 bg-hover-style-1">
                                                        <img src={HowItWorkImg1} alt="" />
                                                        <Link to="/" className="works-link"><FaPlus /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWork;