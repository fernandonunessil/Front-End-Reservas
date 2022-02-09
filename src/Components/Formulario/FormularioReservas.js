import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";

import AutoCompleta from "../AutoComplete/AutocompleteReserva";

//Service imports
import reservasService from "../../Service/ReservasService/ReservasService";
import carrosService from "../../Service/carroService/carrosService";

class FormularioReservas extends Component {
  startState = {
    usuario: "",
    modelo: "",
    kilometragem: "",
    datareserva: "",
    horareserva: "",
    status: "reservado",
    feed: "Status",
  };

  state = this.startState;

  handleChage = (event) => {
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
    const { onUpdate } = this.props;
    reservasService.post(this.state).then((data) => {
      this.setState({
        status: data,
      });
    });

    carrosService.status(this.state);

    onUpdate(true);
  };

  render() {
    const { usuario, datareserva, data, horareserva } = this.state;
    return (
      <>
        <Box component="form" noValidate autoComplete="off">
          <div className="grid justify-center ">
            <div className="flex gap-8 mb-10">
              <div>
                <p className="p-1">Modelo do Veículo</p>
                <AutoCompleta
                  itemData={data}
                  onChange={this.handleSelectChange}
                />
              </div>
              <div>
                <p className="p-1">Nome do Usuario</p>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label="Nome do Usuario"
                  name="usuario"
                  value={usuario}
                  onChange={this.handleChage}
                />
              </div>
            </div>
            <div className="flex gap-8 mb-10">
              <div>
                <p className="p-1">Data da reserva</p>
                <InputMask
                  mask="99/99/9999"
                  value={datareserva}
                  disable={false}
                  maskChar=""
                  onChange={this.handleChage}
                >
                  {() => (
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      label="Data da Reserva"
                      name="datareserva"
                      value={datareserva}
                      onChange={this.handleChage}
                      sx={{ width: "100%" }}
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <p className="p-1">Hora da Reserva</p>
                <InputMask
                  mask="99:99"
                  value={horareserva}
                  disable={false}
                  maskChar=""
                  onChange={this.handleChage}
                >
                  {() => (
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      label="Hora da Reserva"
                      name="horareserva"
                      value={horareserva}
                      onChange={this.handleChage}
                      sx={{ width: "100%" }}
                    />
                  )}
                </InputMask>
              </div>
            </div>
            {/* <div className='w-full'>
              <p className="p-1">Data e Hora da Reserva</p>
              <InputMask
                mask="99/99/9999"
                value={datareserva}
                disable={false}
                maskChar=""
                onChange={this.handleChage}
              >
                {() => (
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    label="Data da Reserva"
                    name="datareserva"
                    value={datareserva}
                    onChange={this.handleChage}
                    sx={{width: '100%'}}
                  />
                )}
              </InputMask>
            </div> */}
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
          </div>
        </Box>
      </>
    );
  }
}

export default FormularioReservas;
