import axios from "axios";

const key = "e6d93e892ef948f38c208001c71683d7";

const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})

const getGenreList = axiosCreate.get('/genres?key=' + key)
const getAllGames = axiosCreate.get('/games?key=' + key)
const getGameByGenreID = (id) => axiosCreate.get('/games?key=' + key + '&genres=' + id)

export default {
    getGenreList,
    getAllGames,
    getGameByGenreID
}