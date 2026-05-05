const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

if (!import.meta.env.VITE_API_URL && !import.meta.env.VITE_BACKEND_URL) {
  console.warn(
    "No VITE_API_URL or VITE_BACKEND_URL found. Falling back to http://localhost:5000"
  );
}

export default API_BASE_URL;
