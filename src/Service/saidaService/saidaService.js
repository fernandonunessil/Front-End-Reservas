import api from "../connectService/api";

class saidaService {
    post = (state) => {
        return new Promise ((resolve, reject) => {
            api.post('/saida',state).then(({data}) => {
                resolve(data)
            })
        })
    }
}

const instance = new saidaService ();

export default instance;