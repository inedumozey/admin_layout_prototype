import Cookies from 'js-cookie';
import axios from 'axios'
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const authUtils = {
    refreshtoken: async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/auth/generate-accesstoken`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('refreshtoken')}`
                }
            });

            // console.log(data)
            return
        }
        catch (err) {
            // console.log(err)
            return
        }
    },

    fetchProfile: async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/profile`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('refreshtoken')}`
                }
            });
            return data.data
        }
        catch (err) {
            return
        }
    }
};

export default authUtils
