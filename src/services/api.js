import axios from "axios";

const makeRequest = ({ headers = {}, ...config }) =>
  axios({
    ...config,
    url: process.env.REACT_APP_API_URL + config.url,
    headers: {
      ...headers,
      "Content-Type": headers["Content-Type"]
        ? headers["Content-Type"]
        : "application/json",
    },
  }).then(({ data }) => data);
const post = async (url, data = {}, params = {}) =>
  makeRequest({ method: "POST", url, data, params });

const get = async (url, params) => makeRequest({ method: "GET", url, params });

const getFile = async (url, params) =>
  makeRequest({ method: "GET", url, params, responseType: "blob" });

const put = async (url, data) => makeRequest({ method: "PUT", url, data });

const patch = async (url, data) => makeRequest({ method: "PATCH", url, data });

const _delete = async (url, data = {}) =>
  makeRequest({ method: "DELETE", url, data });

const upload = async (url, data) =>
  makeRequest({
    method: "POST",
    url: url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const service = {
  post,
  get,
  getFile,
  put,
  patch,
  delete: _delete,
  upload,
};

export default service;
