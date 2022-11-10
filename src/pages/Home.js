import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import Hero from "../components/hero/Hero";
import Feature from "../components/features/Features";
import HomeAbout from "../components/home-about/HomeAbout";
import WhyChoseUs from "../components/why-chose-us/WhyChoseUs";
import FunFact from "../components/fun-fact/FunFact";
import Service from "../components/sevices/Service";
const Home = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Hero />
            <Feature />
            <WhyChoseUs />
            <HomeAbout />
            <FunFact />
            <Service />
        </>
    )
}

export default Home;