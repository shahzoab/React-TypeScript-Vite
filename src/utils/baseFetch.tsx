/**
 * A base function for making fetch requests.
 * @param url - The URL to fetch.
 * @param options - Optional options to pass to the fetch request.
 * @returns The parsed JSON response.
 */
const baseFetch = (url: string, options: RequestInit = {}) => {
  return async () => {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  };
};

export default baseFetch;
