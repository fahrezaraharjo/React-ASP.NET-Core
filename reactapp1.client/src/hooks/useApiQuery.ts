// src/hooks/useApiQuery.ts
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../utils/fetcher';

export function useApiQuery<TData = any>(
  key: string | readonly unknown[],
  url: string,
  params?: Record<string, string | number>,
  options?: UseQueryOptions<TData, Error>
) {
  const queryKey = Array.isArray(key) ? key : [key];

  return useQuery<TData, Error>({
    queryKey,
    queryFn: () =>
      fetcher<TData>(url, {
        method: 'GET',
        params,
      }),
    ...options,
  });
}
