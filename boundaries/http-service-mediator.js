const axios = require('axios');

class httpServiceMediator {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(url, resource, headers) {
        const instance = this.getInstance(url, headers);
        return instance.get(`${url}/${resource}`)
    }

    post(url, resource, body, headers) {
        const instance = this.getInstance(url, headers);
        return instance.post(`${url}/${resource}`, body);
    }

    postWithMultipart(url, resource, formData){
        const instance = this.getInstance(url, headers);
        return instance.post(`${url}/${resource}`,formData);
    }

    getInstance(url, headers){
        
      return axios.create({
            baseURL: url,
            timeout: 1000,
            headers: headers
          });

         
    }
}

const mediator = new httpServiceMediator();

module.exports = mediator;

