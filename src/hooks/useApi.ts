import {useState} from "react";
import {Response} from "../interfaces";

export default (apiFunc: () => void) => {
    const [data, setData] = useState<[] | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const request:() => Promise<void> = async (...args: []) => {
        setLoading(true);
        try {
            const result:any = await apiFunc(...args);
            setData(result?.data);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Unexpected Error!");
        } finally {
            setLoading(false);
        }
    };
    return {
        data,
        error,
        loading,
        request
    };
};
