import { useState, useEffect } from "react";

import { Data } from "@/types/common";
import { get } from "../services/api";

const useFetchData = (url: string) => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url: string) => {
        try {
            const response = await get(url);
            const newData = [...response?.data, ...response?.data]?.sort(
                () => Math.random() - 0.5
            );
            setData(newData);
            /* eslint-disable  @typescript-eslint/no-explicit-any */
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return [fetchData, { data, loading, error }] as const;
};

export default useFetchData;
