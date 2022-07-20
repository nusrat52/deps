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


    search: (searc) => {
        return axios.get(`http://194.233.173.232/api/product/?search=${searc}`)
            .then((response) => {
             return response.data
        })
    },
    checkout: (body) => {
        const token=localStorage.getItem("token")
        return axios.post(`http://194.233.173.232/api/checkout/`, body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
             return response.data
        })
    },
     featuredProducts: (limit=5, offset=0) => {
         return axios.get(`http://194.233.173.232/api/featured-products/?limit=${limit}&offset=${offset}`)
            .then((response) => {
             return response.data
        })
    },
    bestsellerProduct: (limit=7, offset=0) => {
        return axios.get(`http://194.233.173.232/api/bestseller-products/?limit=${limit}&offset=${offset}`)
           .then((response) => {
            return response.data
       })
    },
    getWholeProducts: () => {
        return axios.get(`http://194.233.173.232/api/product/`)
           .then((response) => {
            return response.data
       })
    },
    

    getBanners: () => {
        return axios.get(`http://194.233.173.232/api/banner/`)
           .then((response) => {
            return response.data
       })
    },
    
     getAdress: () => {
        return axios.get(`http://194.233.173.232/api/address/`)
           .then((response) => {
            return response.data
       })
    },
    getProductsBychild: (body) => {
        return axios.post(`http://194.233.173.232/api/filter-by-child/`, body)
           .then((response) => {
            return response.data
       })
    },
    

    getproductsBySub: (body) => {
        return axios.post(`http://194.233.173.232/api/filter/`, body)
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
    }, 
    logginWithToken: (token) => {
         return axios.get("http://194.233.173.232/api/user-detail/",{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
           .then((response) => {
           return response.data
       })
    },
    changePassword: (token, body) => {
          return axios.post("http://194.233.173.232/api/changepassword/",body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
           .then((response) => {
           return response.data
       })
    },
    editProfile: (token, id,  body) => {
        return axios.put(`http://194.233.173.232/api/change-user/${id}/`,body, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
         .then((response) => {
         return response.data
     })
  },

};
 