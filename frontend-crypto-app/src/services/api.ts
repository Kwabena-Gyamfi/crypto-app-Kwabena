import API_BASE_URL from "../config/api";

const removeTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const removeLeadingSlash = (value: string) => value.replace(/^\/+/, "");

export function getApiUrl(path = "") {
  const base = removeTrailingSlash(API_BASE_URL);
  const endpoint = removeLeadingSlash(path);
  return endpoint ? `${base}/${endpoint}` : base;
}

export async function apiFetch<T = any>(path: string, options: RequestInit = {}) {
  const url = getApiUrl(path);
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const body = options.body;
  const fetchOptions: RequestInit = {
    ...options,
    headers,
    body: body && typeof body !== "string" && !(body instanceof FormData) ? JSON.stringify(body) : body,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`API request failed: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ""}`);
  }

  return (await response.json()) as T;
}
