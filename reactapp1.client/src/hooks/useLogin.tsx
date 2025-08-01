import { useApiMutation } from './useApiMutation';

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

interface LoginPayload extends Record<string, unknown> {
    email: string;
    password: string;
}

export function useLogin() {
    return useApiMutation<LoginResponse, LoginPayload>(
        {
            endpoint: '/api/login',
            method: 'POST',
        },
        {
            onSuccess: (data) => {

                document.cookie = `token=${data.token}; path=/; max-age=86400`; // 1 hari
            },
        }
    );
}
