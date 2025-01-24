import axios from "axios";

const BASE_URL = "https://challenge-uno.vercel.app/api";

const api = axios.create({
    baseURL: BASE_URL,
});

const get = (url: string) => api.get(url);

export { get };
