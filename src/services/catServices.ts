import axios from 'axios';
import {API_ENDPOINT} from '../utils/Constant';

const GetCatsRequest = async (params?: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/breeds/${params}`);
    return res.data;
  } catch (err) {
    console.log('err', err);
  }
};

export {GetCatsRequest};
