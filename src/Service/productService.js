import axios from 'axios';
import BASE_URL from "./baseUrl";

// const productService=axios.create({baseURL:BASE_URL,});
   
// productService.interceptors.request.use(
//   (config)=>{
//     const token = localStorage.getItem('token');
//     if(token){
//       config.headers.Authorization=`Bearer ${token}`;
//     }
//     return config;
//     },(error)=>{
//       return Promise.reject(error)
//     }
//     );
const productService = axios.create({
    baseURL: BASE_URL,
  });
  
  // Interceptor without token handling (if no authentication is required)
  productService.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
    //---------------------------Best Sellers----------------------
    const fetchAllProducts = async () => {
        try {
          const response = await productService.get('/api/v1/product');
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching prodcuts :', error);
          throw error;
        }
      };


    export default {
        productService,
        fetchAllProducts,
        
      };