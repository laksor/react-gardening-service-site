import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import Hero from "../components/hero/Hero";
import Feature from "../components/features/Features";
const Home = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Hero />
            <Feature />
        </>
    )
}

export default Home;