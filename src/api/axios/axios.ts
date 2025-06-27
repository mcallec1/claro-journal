import { supabase } from "components/Auth/supabaseClient";
import axios from 'axios';
import { API_BASE_URL } from 'constants.ts';


export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    const { data } = await supabase.auth.getSession();
    const { session } = data;
    const token = session ? session.access_token : null;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);