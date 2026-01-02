'use server';

import qs from "query-string";

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

/**
 * Fetches and returns a typed JSON payload from the CoinGecko API for the specified endpoint.
 *
 * @param endPoint - The API path appended to the configured base URL.
 * @param params - Optional query parameters to include in the request; empty strings and `null` values are omitted.
 * @param revalidate - Cache revalidation time in seconds passed to the fetch `next.revalidate` option.
 * @returns The parsed JSON response deserialized as `T`.
 * @throws Error when the HTTP response has a non-OK status; message format: `API Error: {status}: {server message or statusText}`.
 */
export async function fetcher<T>(endPoint: string, params?: QueryParams, revalidate = 60): Promise<T> {
    const url = qs.stringifyUrl({
        url: `${BASE_URL}/${endPoint}`,
        query: params,
    }, { skipEmptyString: true, skipNull: true });

    const response = await fetch(url, {
        headers: {
            "x-cg-demo-api-key": API_KEY,
            "Content-Type": "application/json",
        } as Record<string, string>,

        next: { revalidate }
    });

    if (!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

        throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
}