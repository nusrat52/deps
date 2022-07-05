import axios from "axios"



 
export const general = {
    getAboutPage: (lang) => {
        return axios.get("http://194.233.173.232/api/about/") 
            .then((response) => {
                if(response.statusText==='OK'){
                    return response.data
                }
         })
    },
    getTeam: () => {
        return axios.get("http://194.233.173.232/api/our-team/")
            .then((response) => {
             return response.data
        })
    },
    getCarousel: () => {
        return axios.get("http://194.233.173.232/api/slide/")
            .then((response) => {
             return response.data
        })
    },
    getCategories: () => {
        return axios.get("http://194.233.173.232/api/categories/")
            .then((response) => {
             return response.data
        })
    },
    askQuestions: (body) => {
        return axios.post("http://194.233.173.232/api/ask-question/", body)
            .then((response) => {
             return response.data
        })
    },
    writeDirector: (body) => {
        return axios.post("http://194.233.173.232/api/write-director/", body)
            .then((response) => {
             return response.data
        })
    },

    getChilds: (id) => {
        return axios.get(`http://194.233.173.232/api/child-categories/${id}/`)
            .then((response) => {
             return response.data
        })
    },
    getSubcategories: (pm) => {
        return axios.get(`http://194.233.173.232/api/sub-categories/${pm}/`)
            .then((response) => {
             return response.data
        })
    },

};
 
export const login = {
    register: (lang, body) => {
         return axios.post("http://194.233.173.232/api/register/", body)
            .then((response) => {
            return response.data
        })
    },
    loggin: (body) => {
        return axios.post("http://194.233.173.232/api/login/", body)
           .then((response) => {
           return response.data
       })
    } 


};
 