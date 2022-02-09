import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import carrosService from '../../Service/carroService/carrosService';


export default function AutoCompleta(params) {
  const {onChange} = params;

  //Options filter label/value
  const [options, setOptions] = useState([]);

  //Data of options
  const [data, setData] = useState([]);

  // const value user choose
  let [value, setValue] = useState(null)


  useEffect(() => {
    carrosService.get().then((data) => {
      setData(data)
    })
  }, []);

  useEffect(() => {
    if (options.length === 0)
      setOptions(
        data.map((row) => ({
          value: row.placa,
          label: row.modelo,
          stats: row.stats,
          km: row.km
        }))
      );
  }, [data, options]);

  return (
    <div className="w-full">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        onChange={(event, newValue) => {
          setValue((value = newValue))
          onChange(value);
        }}
        getOptionDisabled={(option) =>
          option.stats === 'em uso' 
        }
        sx={{ width: "100%", minWidth: 220 }}
        renderInput={(params) => (
          <TextField {...params} label="Modelo do Veículo" />
        )}
      />
    </div>
  );
}
