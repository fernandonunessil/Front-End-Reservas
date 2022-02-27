import { Component } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import AutoCompleteSaida from '../../Components/AutoComplete/AutocompleteSaida';

import saidaService from '../../Service/saidaService/saidaService';
import carrosService from '../../Service/carroService/carrosService';

class FormularioSaida extends Component {
    initialState = {
        modelo: '',
        motorista: '',
        quilometragem: '',
        status: 'em uso',
        datasaida: '',
        hora: '',
    }

    state = this.initialState;

    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]:value
      })
    }

    handleSelectChange = (value) => {
      this.setState({
        'modelo':value
      })
    }

    handleSubmitForm = () => {
      saidaService.post(this.state);
      carrosService.status(this.state);
    }


    render() {
        const { motorista, quilometragem, datasaida, hora } = this.state;
        return (
            <>
            <div>
              <Box component="form" noValidate autoComplete="off">
                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="mb-2">Modelo do Veículo :</p>
                    <AutoCompleteSaida onChange={this.handleSelectChange} />
                  </div>
                  <div>
                    <p className="mb-2">Quem vai dirigir o veículo</p>
                    <TextField
                      id="filled-basic"
                      label="Nome de quem vai dirigir"
                      variant="filled"
                      name="motorista"
                      value={motorista}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="mb-2">Data de saida :</p>
                    <TextField
                      id='filled-basic'
                      label='Data da saida'
                      variant='filled'
                      name='datasaida'
                      value={datasaida}
                      onChange={this.handleChange}
                    />
                      
                  </div>
                  <div>
                    <p className="mb-2">Hora da Saida</p>
                    <TextField
                      id="filled-basic"
                      label="Hora da Saida"
                      variant="filled"
                      name="hora"
                      value={hora}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div>
                  <p>Quilometragem atual do veículo :</p>
                  <TextField
                    id="filled-basic"
                    label="Quilometragem"
                    variant="filled"
                    name="quilometragem"
                    value={quilometragem}
                    onChange={this.handleChange}
                    sx={{ width: "100%" }}
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
                      onClick={() => this.handleSubmitForm()}
                    >
                      Cadastrar
                    </Button>
                  </Stack>
                </div>
              </Box>
            </div>
          </>
        )
    }
}

export default FormularioSaida;