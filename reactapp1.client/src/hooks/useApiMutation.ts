import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { fetcher } from '../utils/fetcher';

type MutationMethod = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface MutationArgs {
    endpoint: string;
    method?: MutationMethod;
    headers?: HeadersInit;
}

type MutationBody = Record<string, unknown> | FormData | undefined;

export function useApiMutation<T = any, TVariables extends MutationBody = MutationBody>(
    { endpoint, method = 'POST', headers }: MutationArgs,
    options?: UseMutationOptions<T, Error, TVariables>
) {
    return useMutation<T, Error, TVariables>({
        mutationFn: (variables) => fetcher<T>(endpoint, method, variables, headers),
        ...options,
    });
}
