import React, { useEffect } from 'react';

const Banner = ({ gameBanner }) => {

    useEffect(() => {
        console.log(gameBanner, "this is the game banner photo");
    }, [])
    return (
        <div className='h-3/6 md:h-1/6 w-full my-10 shadow-2xl shadow-cyan-500/50'>
            <div
                className="hero h-full rounded-xl"
                style={{
                    backgroundImage: `url(${gameBanner.background_image})`,
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">{gameBanner.name}</h1>
                        <p className="mb-5 md:font-semibold">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn text-white bg-cyan-400 font-bold border-cyan-400
                         hover:bg-rose-500 hover:border-rose-500 shadow-2xl shadow-cyan-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;