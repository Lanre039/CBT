import axios from 'axios';
import { useSelector } from 'react-redux';

// console.log('hello', token);

export const useToken = () => {
  const token =
    sessionStorage.getItem('cbt_user_token') ||
    sessionStorage.getItem('cbt_admin_token');
  // const { token } = useSelector((state) => state.tokens);
  // const token = sessionStorage.getItem(sessionStorage.getItem('tokenType'));
  // return function () {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      // add other headers here
    },
    // timeout: 1000,
    withCredentials: true,
  });
  // };
};

// export const examPortal = fetchJCbt();
