import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "7363ad43c7fbcf4b068dcd425b1609b9",
        language: "pt-BR",
        include_adult: true,
    }
})