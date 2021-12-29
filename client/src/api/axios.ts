export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers["Accept"] = "application/json";
  axios.interceptors.request.use((config: any) => {
    const {
      auth: { token },
    } = store.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}