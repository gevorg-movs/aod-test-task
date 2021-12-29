/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  // public static axiosInstance: AxiosInstance
  //
  // public static init(app: App<Element>) {
  //     ApiService.axiosInstance = app
  //     ApiService.axiosInstance.use(VueAxios, axios)
  //     ApiService.axiosInstance.axios.defaults.baseURL =
  //         process.env.VUE_APP_API_URL
  // }
  //
  // public static setHeader(): void {
  //     ApiService.vueInstance.axios.defaults.headers.common[
  //         "Authorization"
  //         ] = `Bearer ${PassportService.getToken()}`
  // }
  //
  //
  // public static get(
  //     url: string,
  //     params: AxiosRequestConfig = {}
  // ): Promise<AxiosResponse> {
  //     ApiService.setHeader()
  //     return ApiService.vueInstance.axios.get(`${url}`, params)
  // }
  //
  //
  // public static post(
  //     resource: string,
  //     params: object = {},
  //     config: AxiosRequestConfig = {}
  // ): Promise<AxiosResponse> {
  //     ApiService.setHeader()
  //     return ApiService.vueInstance.axios.post(`${resource}`, params, config)
  // }
  //
  //
  // public static update(
  //     resource: string,
  //     slug: string,
  //     params: AxiosRequestConfig
  // ): Promise<AxiosResponse> {
  //     return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params)
  // }
  //
  // public static put(
  //     resource: string,
  //     params: AxiosRequestConfig
  // ): Promise<AxiosResponse> {
  //     return ApiService.vueInstance.axios.put(`${resource}`, params)
  // }
  //
  // public static delete(resource: string): Promise<AxiosResponse> {
  //     return ApiService.vueInstance.axios.delete(resource)
  // }
}

export default ApiService
