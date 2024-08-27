import React, { useEffect } from 'react';
import { HiMiniStar } from "react-icons/hi2";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { FaFire } from "react-icons/fa";

const GamesByGenresID = ({ gameList, selectedGenresName }) => {


    useEffect(() => {

        console.log("from genre name you can do", selectedGenresName);
    }, [])
    return (
        <div>
            <h1 className='text-xl md:text-4xl text-center font-bold text-rose-500 dark:text-white my-10'>{selectedGenresName} Games</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    gameList.map((x) => (
                        <div>
                            <div className="card bg-base-100 w-80 h-80 shadow-xl shadow-cyan-500 hover:scale-110 transition-all duration-300 ease-in-out">
                                <figure>
                                    <img className='h-full w-full'
                                        src={x.background_image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title"> {x.name}
                                        <div className="badge badge-secondary">{x.metacritic}</div>
                                    </h2>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline"><HiMiniStar />{x.rating}</div>
                                        <div className="badge badge-outline"><HiChatBubbleOvalLeft />{x.reviews_count}</div>
                                        <div className="badge badge-outline"><FaFire />{x.suggestions_count}</div>
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

export default GamesByGenresID;