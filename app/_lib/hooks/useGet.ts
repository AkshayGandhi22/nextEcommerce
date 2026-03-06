"use client";

import { useCallback, useEffect, useState } from "react";

export function useGet<T>(url: string, initialValue: T) {
    const [data, setData] = useState<T>(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }

            const result = (await res.json()) as T;
            setData(result);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong";
            setError(message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        setData,
        loading,
        error,
        refetch: fetchData,
    };
}
