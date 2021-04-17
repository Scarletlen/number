const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/Scarletlen/number'
})

const getRoot = () => api.get('/root_of_eqution')

const apis = {
    getRoot
}

export default apis