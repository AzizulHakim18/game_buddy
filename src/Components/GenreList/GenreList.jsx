import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Services/GlobalApi';

const GenreList = ({ genereId, selectedGenresName }) => {


    const [genreList, setGenreList] = useState([])

    const [activeIndex, setActiveIndex] = useState(0)


    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results);
            setGenreList(resp.data.results)
        })
    }

    return (
        <div>
            <h1 className='text-xl md:text-4xl font-bold text-cyan-500 dark:text-white text-center mt-10'>Genre List</h1>

            <div className='px-10'>
                {
                    genreList.map((x, i) => (
                        <div
                            onClick={() => { setActiveIndex(i); genereId(x.id); selectedGenresName(x.name) }}
                            className={`lg:flex justify-start items-center gap-4 m-2 p-1 
                        rounded-lg group bg-cyan-400 text-white hover:bg-rose-500
                       ${activeIndex == i ? "bg-rose-500" : null}
                        `}>
                            <div className="avatar">
                                <div className={`mask mask-hexagon w-16 group-hover:scale-105 transition-all 
                                                    ease-in-out duration-300`}>
                                    <img src={x.image_background} />
                                </div>
                            </div>
                            <h3 className='text-xl font-bold  transition-all ease-in-out duration-100'>{x.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default GenreList;