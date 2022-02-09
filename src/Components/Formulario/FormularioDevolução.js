import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputMask from "react-input-mask";
import Button from "@mui/material/Button";

import AutoCompleteEntrega from "../../Components/AutoComplete/AutocompleteEntrega";
import entregasService from '../../Service/entregasService/entregasService';
import carrosService from '../../Service/carroService/carrosService';

class FormularioDevolução extends Component {
  initialState = {
    modelo: "",
    motorista: "",
    data: "",
    hora: "",
    quilometragem: "",
    status:'livre'
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelectChange = (value) => {
    this.setState({
      modelo: value,
    });
  };

  handleSubmitForm = () => {
    const {onUpdate} = this.props;
    entregasService.post(this.state)
    carrosService.status(this.state)

    onUpdate(true)
  };

  render() {
    const { motorista, data, hora, quilometragem } = this.state;
    return (
      <>
        <div>
          <Box component="form" noValidate autoComplete="off">
            <div className="flex gap-8 mb-8">
              <div>
                <p className="mb-2">Modelo do Veículo :</p>
                <AutoCompleteEntrega onChange={this.handleSelectChange} />
              </div>
              <div>
                <p className="mb-2">Nome de quem estava dirigindo </p>
                <TextField
                  id="filled-basic"
                  label="Nome de quem estava dirigindo"
                  variant="filled"
                  name="motorista"
                  value={motorista}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="flex gap-8 mt-12 mb-12">
              <div>
                <p>Data da entrega</p>
                <InputMask
                  mask="99/99/9999"
                  value={data}
                  disable={false}
                  maskChar=""
                  onChange={this.handleChange}
                >
                  {() => (
                    <TextField
                      id="filled-basic"
                      label="Data da Entrega"
                      variant="filled"
                      name="entregaData"
                      value={hora}
                      onChange={this.handleChange}
                      sx={{ width: "100%" }}
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <p>Hora da entrega</p>
                <InputMask
                  mask="99:99"
                  value={hora}
                  disable={false}
                  maskChar=""
                  onChange={this.handleChange}
                >
                  {() => (
                    <TextField
                      id="filled-basic"
                      label="Hora da Entrega"
                      variant="filled"
                      name="horaEntrega"
                      value={hora}
                      onChange={this.handleChange}
                      sx={{ width: "100%" }}
                    />
                  )}
                </InputMask>
              </div>
            </div>
            <div>
              <p>Quilometragem atual do veículo</p>
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
    );
  }
}

export default FormularioDevolução;
