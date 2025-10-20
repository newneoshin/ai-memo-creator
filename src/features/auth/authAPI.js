import axios from "axios";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const authAPI = {
  signUp: async ({ email, password }) => {
    const config = {
      url: `${SUPABASE_URL}/auth/v1/signup`,
      method: "POST",
      headers: {
        "Content-type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      data: {
        email: email,
        password: password,
      },
    };

    const response = await axios(config);
    return response.data;
  },

  login: async ({ email, password }) => {
    const config = {
      url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      method: "POST",
      headers: {
        "Content-type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      data: {
        email: email,
        password: password,
      },
    };

    const response = await axios(config);
    return response.data;
  },
};

export default authAPI;
