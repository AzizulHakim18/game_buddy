import React, { useEffect, useState } from 'react';
import GenreList from '../../Components/GenreList/GenreList';
import GlobalApi from '../../Services/GlobalApi';
import Banner from '../Banner/Banner';
import TrendingGames from '../../Components/TendingGames/TrendingGames';
import GamesByGenresID from '../../Components/GamesByGenresID/GamesByGenresID';
import { DiVim } from 'react-icons/di';

const Home = () => {

    const [allGameList, setAllGameList] = useState([]);
    const [gameListByGenres, setGameListByGenres] = useState([]);
    const [selectedGenresName, setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenreID(4)
    }, [])

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            console.log(resp.data.results);
            setAllGameList(resp.data.results)
        })
    }

    const getGameListByGenreID = (id) => {
        console.log("GENRE ID", id);
        GlobalApi.getGameByGenreID(id).then((resp) => {
            console.log(resp.data.results);
            setGameListByGenres(resp.data.results)
        })
    }

    return (

        <div>
            <div>
                {allGameList?.length > 0 ?
                    <div>
                        <Banner gameBanner={allGameList[0]}></Banner>
                        <div className='flex justify-around'>
                            <TrendingGames gameList={allGameList}></TrendingGames>
                        </div>
                    </div> : <div className='w-full h-full flex justify-center items-center'><span className="loading loading-infinity loading-lg text-warning"></span></div>}
            </div>
            <div className=' grid grid-cols-4 gap-4'>
                <div className=' h-full hidden md:block'>
                    <GenreList genereId={(genereId) => getGameListByGenreID(genereId)}
                        selectedGenresName={(name) => { setSelectedGenresName(name) }}
                    ></GenreList>
                </div>
                <div className='col-span-4 md:col-span-3 mt-10'>
                    {gameListByGenres?.length > 0 ?
                        <div>
                            <GamesByGenresID
                                gameList={gameListByGenres}
                                selectedGenresName={selectedGenresName}
                            ></GamesByGenresID>
                        </div> : <span className="loading loading-infinity loading-lg text-warning"></span>
                    }
                </div>
            </div>
        </div>


        // <div className=' grid grid-cols-4 gap-4'>
        //     <div className=' h-full hidden md:block'>
        //         <GenreList genereId={(genereId) => getGameListByGenreID(genereId)}
        //             selectedGenresName={(name) => { setSelectedGenresName(name) }}
        //         ></GenreList>
        //     </div>
        //     <div className='col-span-4 md:col-span-3'>
        //         {allGameList?.length > 0 && gameListByGenres.length > 0 ?
        //             <div><Banner gameBanner={allGameList[0]}></Banner>
        //                 <TrendingGames gameList={allGameList}></TrendingGames>
        //                 <GamesByGenresID gameList={gameListByGenres}
        //                     selectedGenresName={selectedGenresName}
        //                 ></GamesByGenresID>
        //             </div> : null}


        //     </div>
        // </div>
    );
};

export default Home;