import axios from 'axios';
import BASE_URL from "./baseUrl";

// const orderService=axios.create({baseURL:BASE_URL,});
   
// orderService.interceptors.request.use(
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
const orderService = axios.create({
    baseURL: BASE_URL,
  });
  
  // Interceptor without token handling (if no authentication is required)
  orderService.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
    //---------------------------Best Sellers----------------------
    const fetchBestSellers = async () => {
        try {
          const response = await orderService.get('/api/v1/order/bestseller');
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching Best sellers :', error);
          throw error;
        }
      };
 //---------------------------Checkout----------------------
 const checkOutList = async (orderDTO) => {
  try {
    const response = await orderService.post('/api/v1/order', orderDTO);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error during checkout:', error.response?.data || error.message);
    throw error;
  }
};

    export default {
        orderService,
        fetchBestSellers,
        checkOutList,
        
      };