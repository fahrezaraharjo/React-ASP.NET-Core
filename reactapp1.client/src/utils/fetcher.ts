export const fetcher = async <T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: Record<string, unknown> | FormData,
    headers: HeadersInit = {}
): Promise<T> => {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const isFormData = body instanceof FormData;

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`, {
        method,
        headers: {
            ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        ...(body ? { body: isFormData ? body : JSON.stringify(body) } : {}),
        // Hanya aktifkan ini jika kamu benar-benar perlu cookie dikirim ke domain lain
        credentials: 'include',
    });

    if (!res.ok) {
        const contentType = res.headers.get('Content-Type');
        let errorMessage = 'Request failed';

        try {
            if (contentType?.includes('application/json')) {
                const error = await res.json();
                errorMessage = error.message || error.error || errorMessage;
            } else {
                errorMessage = await res.text();
            }
        } catch {
            // fallback
        }

        throw new Error(errorMessage);
    }

    if (res.status === 204) {
        return null as T;
    }

    return res.json();
};
