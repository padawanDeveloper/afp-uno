import axios from "axios";

const BASE_URL = "https://challenge-uno.vercel.app/api";

const api = axios.create({
    baseURL: BASE_URL,
    headers: { "content-type": "application/x-www-form-urlencoded" },
});

const get = (url: string) => api.get(url);

export { get };
