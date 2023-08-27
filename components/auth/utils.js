import Cookies from 'js-cookie';
import axios from 'axios'

const authUtils = {
    refreshtoken: async () => {
        try {
            const { data } = await axios.get(`/auth/generate-accesstoken`, {
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
            if (Cookies.get('refreshtoken')) {
                // fetch data from api
                if (localStorage.getItem('user')) {

                    // fetch from local storage
                    const user = JSON.parse(localStorage.getItem('user'))
                    return user;
                }
                else {
                    // fect from backend
                    const { data } = await axios.get(`/profile`, {
                        headers: {
                            'Authorization': `Bearer ${Cookies.get('refreshtoken')}`
                        }
                    });

                    // store in localstorage
                    localStorage.setItem("user", JSON.stringify(data.data))

                    // fetch from local storage
                    const user = JSON.parse(localStorage.getItem('user'))
                    return user
                }
            }
            else {
                // if user not logged in, remove user data from local storage
                localStorage.removeItem('user')
            }
        }
        catch (err) {
            return
        }
    },

    storeCookie(key, value) {
        Cookies.set(key, value)
    },

    logout(router) {
        Cookies.remove('refreshtoken');
        Cookies.remove('accesstoken');
        localStorage.removeItem('user')
        router.push('/')
    }
};

export default authUtils
