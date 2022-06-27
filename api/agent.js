import axios from "axios"



 
export const general = {
    getAboutPage: (lang) => {
        return axios.get("http://194.233.173.232/api/about/") 
            .then((response) => {
                if(response.statusText==='OK'){
                    return response.data
                }
                console.log(response.data);
                
        })
    },
    getTeam: () => {
        return axios.get("http://194.233.173.232/api/our-team/")
            .then((response) => {
                console.log(response);
            return response.data
        })
    },
    getCarousel: () => {
        return axios.get("http://194.233.173.232/api/slide/")
            .then((response) => {
                console.log(response);
            return response.data
        })
    }
};
 
export const login = {
    register: (lang, body) => {
         return axios.post("http://194.233.173.232/api/register/", body)
            .then((response) => {
            return response.data
        })
    }
};
 