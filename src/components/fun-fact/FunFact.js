import React from 'react';
import CountUp from 'react-countup';

const FunFact = () => {
    return (
        <div className="fun-fact-area pt-60 pb-60 bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="single-counter text-center">
                            <h2><span className="counter"><CountUp end={5} /></span>K+</h2>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="single-counter text-center">
                            <h2><span className="counter"><CountUp end={25} /></span>+</h2>
                            <p>Expert Landscape</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="single-counter text-center">
                            <h2><span className="counter"><CountUp end={150} /></span>+</h2>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="single-counter text-center">
                            <h2><span className="counter"><CountUp end={100} /></span>%</h2>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFact;