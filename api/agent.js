import axios from "axios"

   
export const general = {
    getAboutPage: (lang) => {
        return axios.get("https://api.i-link.az/api/stroyka/get/about") 
            .then((response) => {
                if(response.statusText==='OK'){
                    return response.data
                }
         })
    },
    getTeam: () => {
        return axios.get("https://api.i-link.az/api/stroyka/get/team")
            .then((response) => {
             return response.data
        })
    },
    getCarousel: () => {
        return axios.get("https://api.i-link.az/api/stroyka/get/slider")
            .then((response) => {
             return response.data
        })
    },
    getCategories: () => {
        return axios.get("https://api.i-link.az/api/stroyka/get/categories")
            .then((response) => {
             return response.data
        })
    },
    askQuestions: (body) => {
        return axios.post("https://api.i-link.az/api/stroyka/contactus/", body)
            .then((response) => {
             return response.data
        })
    },
    writeDirector: (body) => {
        return axios.post("https://api.i-link.az/api/stroyka/contactus/", body)
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


    search: (search, lang) => {
        return axios.get(`https://api.i-link.az/api/stroyka/product/livesearch?search=${search}&lang=${lang}`)
            .then((response) => {
             return response.data
        })
    },
    checkout: (body) => {
        const token=localStorage.getItem("token")
        return axios.post(`https://api.i-link.az/api/stroyka/checkout`, body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
             return response.data
        })
    },
     featuredProducts: (limit=5, offset=0) => {
         return axios.get(`https://api.i-link.az/api/stroyka/get/product/featured`)
            .then((response) => {
             return response.data
        })
    },
    bestsellerProduct: (limit=7, offset=0) => {
        return axios.get(`https://api.i-link.az/api/stroyka/get/product/bestseller`)
           .then((response) => {
            return response.data
       })
    },
    getWholeProducts: () => {
        return axios.get(`https://api.i-link.az/api/stroyka/get/products/all`)
           .then((response) => {
            return response.data
       })
    },
    

    getBanners: () => {
        return axios.get(`https://api.i-link.az/api/stroyka/banners/list`)
           .then((response) => {
            return response.data
       })
    },
    
     getAdress: () => {
        return axios.get(`https://api.i-link.az/api/admin/get/adress`)
           .then((response) => {
            return response.data
       })
    },
    getProductsBychild: (body) => {
        return axios.post(`https://api.i-link.az/api/stroyka/filter/product/subcategory`, body)
           .then((response) => {
            return response.data
       })
    },
    

    getproductsBySub: (body) => {
        return axios.post(`https://api.i-link.az/api/stroyka/filter/product/altcategory`, body)
           .then((response) => {
            return response.data
       })
    },
     
    getProductBySlug: (slug) => {
        return axios.get(`https://api.i-link.az/api/stroyka/get/products/${slug}`)
           .then((response) => {
            return response.data
       })
    },
};
 
export const login = {
    register: (lang, body) => {
         return axios.post("https://api.i-link.az/api/stroyka/register/user", body)
            .then((response) => {
            return response.data
        })
    },
    loggin: (body) => {
        return axios.post("https://api.i-link.az/api/stroyka/login/user", body)
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
          return axios.put("https://api.i-link.az/api/stroyka/user/update/password",body, {
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
    
    getUserData: (token) => {
        return axios.get("https://api.i-link.az/api/stroyka/user/me",{
           headers: {
             'Authorization': `Bearer ${token}` 
           }
         })
          .then((response) => {
          return response.data
      })
   },

};
 