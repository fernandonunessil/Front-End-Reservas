import api from '../connectService/api';


class carrosService {
    get() {
        return new Promise((resolve, reject) => {
            api.get("carros").then(({data}) => {
                resolve(data);
            })
        })
    }

    post(state) {
        return new Promise((resolve, reject) => {
            api.post("carros", state).then(({data}) => {
                resolve(data);
            })
        })
    }

    status(state) {
        console.log(state);
        return new Promise((resolve, reject) => {
            api.post(`http://localhost:8847/carros/${state.modelo.value}`,state)
        })
    }

    // getFree() {
    //     return new Promise((resolve, reject) => {
    //         api.get('/carros/livres').then(({data}) => {
    //             resolve(data)
    //         }) 
    //     }) 
    // }
            
    // getReserved () {
    //     return new Promise((resolve, reject) => {
    //         api.get('/carros/reservado').then(({data}) => {
    //             resolve(data)
    //         })
    //     })
    // }

    // getinuse () {
    //     return new Promise((resolve, reject) => {
    //         api.get('/carros/em_uso').then(({data}) => {
    //             resolve(data)
    //         })
    //     })
    // }
}

const instance = new carrosService();

export default instance;