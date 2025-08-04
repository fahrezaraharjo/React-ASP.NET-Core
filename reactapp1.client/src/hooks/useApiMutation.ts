// src/hooks/useApiMutation.ts
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { fetcher, FetchMethod } from '../utils/fetcher';

interface MutationProps<TData = any, TVariables = any> {
  url: string;
  method?: FetchMethod;
  options?: UseMutationOptions<TData, Error, TVariables>;
}

export function useApiMutation<TData = any, TVariables = any>({
  url,
  method = 'POST',
  options,
}: MutationProps<TData, TVariables>) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (variables) =>
      fetcher<TData>(url, {
        method,
        body: variables,
      }),
    ...options,
  });
}
