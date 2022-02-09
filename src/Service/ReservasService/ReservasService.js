import api from "../connectService/api";

class reservasService {
  get() {
    return new Promise((resolve, reject) => {
      api.get("reservas").then(({ data }) => {
        resolve(data);
      });
    });
  }

  post(state) {
    return new Promise((resolve, reject) => {
      api.post('reservas', state).then(({data}) =>{
        resolve(data)
      })
    })
  }
}

const instance = new reservasService();

export default instance;
