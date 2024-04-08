export async function fetchData(url: string, options?: RequestInit): Promise<Response> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API key is not provided");
  }

  const headers = {
    ...options?.headers,
    "X-Auth-Token": apiKey,
  };

  return fetch(url, { ...options, headers });
}
