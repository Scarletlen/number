const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/Scarletlen/number'
})

const getRoot = () => api.get('/root_of_eqution')
const getmatrix = () => api.get('/matrix')

const apis = {
    getRoot,getmatrix
}

export default apis