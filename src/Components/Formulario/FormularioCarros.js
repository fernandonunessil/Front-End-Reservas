import React, {Component} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputMask from 'react-input-mask';

import carrosService from '../../Service/carroService/carrosService';

// Formulario da pagina /carros
class Formulario extends Component {
  initialState = {
    placa: '',
    anoveiculo: '',
    modelo: '',
    url: '',
    quilometragem: '',
    response: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmitForm = () => {
    carrosService.post(this.state).then((data) => {
      this.setState({
        response : data
      })
    })
  }

  render() {
    const {placa, anoveiculo, modelo, url, kilometragem} = this.state;
    return (
      <Box component="form" noValidate autoComplete="off">
        <div className="grid justify-center ">
          <div className="flex gap-8 mb-8">
            <div>
              <p className="p-1 mb-2">Placa do Veículo</p>
              <TextField id="filled-basic" variant="filled" label='Placa do Veículo' value={placa} name='placa' onChange={this.handleChange}/>
            </div>
            <div>
              <p className="p-1 mb-2">Ano do Veículo</p>
              <InputMask mask="9999" value={anoveiculo} disble={false} maskChar="" onChange={this.handleChange}>
                {() => (
                  <TextField id="filled-basic" variant="filled" label='Ano do Veículo' value={anoveiculo} name='anoveiculo'/>
                )}
              </InputMask>
            </div>
          </div>
          <div className="flex gap-8 mb-4">
            <div>
              <p className="p-1 mb-2">Modelo do Veículo</p>
              <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              label='Modelo do Veículo'
              name='modelo'
              value={modelo}
              onChange={this.handleChange}
            />
            </div>
            <div>
              <p className="p-1 mb-2">Kilometragem</p>
              <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              label='quilometragem do veículo'
              name='quilometragem'
              value={kilometragem}
              onChange={this.handleChange}
            />
            </div>
          </div>
          {/* <div className="w-full mb-4">
            <p className="p-1 mb-2">Modelo do Veículo</p>
            <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              label='Modelo do Veículo'
              name='modelo'
              value={modelo}
              onChange={this.handleChange}
            />
          </div> */}
          <div className="w-full mt-4">
            <p className="p-1 mb-2">Adicione a url de uma imagem do modelo</p>
            <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              label='URL de uma imagem do carro'
              name='url'
              value={url}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="p-7">
            <Stack direction="row" spacing={0}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#2B2B2B",
                  color: "white",
                  border: "1px solid #ccc",

                  "&:hover": {
                    backgroundColor: "#1f1f1f",
                  },
                }}
                onClick={this.handleSubmitForm}
              >
                Cadastrar
              </Button>
            </Stack>
          </div>
        </div>
      </Box>
    );
  }
}

export default Formulario;
