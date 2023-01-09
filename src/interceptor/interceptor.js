import axios from "axios";

const BASE_URL = "http://hotel.mahdiab.ir/api/";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

axiosInstance.interceptors.response.use((response) => response);
