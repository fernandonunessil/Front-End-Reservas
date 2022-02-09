import api from "../connectService/api"

class entregasService {
    post(state) {
        return new Promise((resolve, reject) => {
            api.post("entregas", state).then(({data}) => {
                resolve(data);
            })
        })
    }
}

const instance = new entregasService();

export default instance;