import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import {fetcher} from "../utils/fetcher";

function buildQueryString(params?: Record<string, string | number>) {
    if (!params) return '';
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => query.append(key, value.toString()));
    return `?${query.toString()}`;
}

export function useApiQuery<T = any>(
    endpoint: string,
    params?: Record<string, string | number>,
    options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
    const url = `${endpoint}${buildQueryString(params)}`;

    return useQuery<T>({
        queryKey: [endpoint, params],
        queryFn: () => fetcher<T>(url, 'GET'),
        ...options,
    });
}
