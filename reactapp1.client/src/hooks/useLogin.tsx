import { useApiMutation } from './useApiMutation';
import {IApiResponse} from "../types/IApiResponse";

interface LoginResponse extends IApiResponse<String> {}

interface LoginPayload extends Record<string, unknown> {
    username: string;
    password: string;
}

export function useLogin() {
    return useApiMutation<LoginResponse, LoginPayload>(
        {
            endpoint: 'login',
            method: 'POST',
        },
        {
            onSuccess: (data) => {

                document.cookie = `token=${data.token}; path=/; max-age=86400`; // 1 hari
            },
        }
    );
}
