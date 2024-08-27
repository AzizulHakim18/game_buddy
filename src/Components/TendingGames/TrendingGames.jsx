import React, { useEffect } from 'react';

const TrendingGames = ({ gameList }) => {

    useEffect(() => { console.log(gameList) }, [])
    return (
        <div>
            <h1 className='text-xl md:text-4xl font-bold text-rose-500 text-center dark:text-white my-4'>Tending Games</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    gameList.map((x, i) => i < 4 && (
                        <div >
                            <div className="card bg-base-100 w-80 h-80 shadow-xl shadow-cyan-500 hover:scale-110 transition-all duration-300 ease-in-out">
                                <figure>
                                    <img
                                        src={x.background_image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {x.name}
                                        <div className="badge bg-rose-500 text-white p-3">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TrendingGames;