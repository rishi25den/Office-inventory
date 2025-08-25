import axios from "axios";

// Axios instance
const serviceCall = axios.create({
  baseURL: "/", // Laravel routes
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // important for Sanctum/session cookies
});

// Optional: response interceptor for global error handling
serviceCall.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

const api = {
  getData: (url, params = {}) => serviceCall.get(url, { params }),
  postData: (url, data = {}, headers = {}) => serviceCall.post(url, data, { headers }),
  putData: (url, data = {}, headers = {}) => serviceCall.put(url, data, { headers }),
  patchData: (url, data = {}, headers = {}) => serviceCall.patch(url, data, { headers }),
  deleteData: (url, params = {}, headers = {}) =>
    serviceCall.delete(url, { params, headers }),
};

export default api;
