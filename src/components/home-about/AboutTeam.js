import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import AboutTeamImg1 from "../../assets/images/about/st-1.jpg";
import AboutTeamImg2 from "../../assets/images/about/st-2.jpg";
import AboutTeamImg3 from "../../assets/images/about/st-3.jpg";
import AboutTeamImg4 from "../../assets/images/about/st-4.jpg";

const AboutTeamData = [
  {
    id: uuidv4(),
    img: AboutTeamImg1,
    imgAlt: "Sheraia Img",
    fbLink: "/",
    twitterLink: "/",
    instagramLink: "/",
    pinterestLink: "/",
    heading: "Sheraia",
    position: "CEO , Gardener",
  },

  {
    id: uuidv4(),
    img: AboutTeamImg2,
    imgAlt: "Nicolas Img",
    fbLink: "/",
    twitterLink: "/",
    instagramLink: "/",
    pinterestLink: "/",
    heading: "Nicolas",
    position: "COO , Gardener",
  },

  {
    id: uuidv4(),
    img: AboutTeamImg3,
    imgAlt: "Neloy Img",
    fbLink: "/",
    twitterLink: "/",
    instagramLink: "/",
    pinterestLink: "/",
    heading: "Neloy",
    position: "CFO, Gardener",
  },

  {
    id: uuidv4(),
    img: AboutTeamImg4,
    imgAlt: "Murkari Img",
    fbLink: "/",
    twitterLink: "/",
    instagramLink: "/",
    pinterestLink: "/",
    heading: "Murkari",
    position: "Manager , Landscaper",
  },
];

const AboutTeamItem = ({
  img,
  imgAlt,
  fbLink,
  twitterLink,
  instagramLink,
  pinterestLink,
  heading,
  position,
}) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div className="single-team-style-2 text-center">
          <div className="single-team-style-2-img">
            <img src={img} alt={imgAlt} />
            <div className="team-social-style-2">
              <a href={fbLink}>
                <FaFacebookF />
              </a>
              <a href={twitterLink}>
                <FaTwitter />
              </a>
              <a href={instagramLink}>
                <FaInstagram />
              </a>
              <a href={pinterestLink}>
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="single-team-content-style-2">
            <h4>{heading}</h4>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutTeam = () => {
  return (
    <>
      <div className="team-area white-bg pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Team Members</span>
                <h2>
                  Our Core Members <br /> of our Dedicated Team
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {AboutTeamData.map((data) => (
              <AboutTeamItem
                key={data.id}
                img={data.img}
                imgAlt={data.imgAlt}
                fbLink={data.fbLink}
                twitterLink={data.twitterLink}
                instagramLink={data.instagramLink}
                pinterestLink={data.pinterestLink}
                heading={data.heading}
                position={data.position}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
