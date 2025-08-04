// src/utils/fetcher.ts
export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetcherOptions {
  method?: FetchMethod;
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

export async function fetcher<T = any>(
  url: string,
  { method = 'GET', body, headers, params }: FetcherOptions = {}
): Promise<T> {
  let fullUrl = url;

  // Add query params if present
  if (params) {
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    fullUrl += `?${queryString}`;
  }

  const response = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Network response was not ok');
  }

  return response.json();
}
