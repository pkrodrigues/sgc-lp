import React from "react";
import FormCad from './FormCad';
import './FormCad.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import { Button } from "@mui/material";



export default props => {
  const [value, setValue] = React.useState('contratado');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
    <div>
      <h2>Cadastrar novo médico </h2>
      <div className="boxCad" >
        <FormCad/>
        <h2>Dados de Contratação</h2>
        <Box component="form" sx={{
        '& .MuiTextField-root': { m: 3, width: '38ch' },
        }}>
          <TextField id="especializacao" label="Especialização:" variant="standard" />
          <TextField id="crm" label="CRM:" variant="standard"/>
          <TextField id="cargo" label="Cargo:" variant="standard"/>
          <TextField sx={{visibility: 'hidden'}}/>

          <RadioGroup
            aria-labelledby="tipoContratacao"
            name="tipoContratacao"
            value={value}
            onChange={handleChange}
            row
            sx={{
              ml:'7ch'
            }}
          >
            <FormControlLabel value="contratado" control={<Radio />} label="Contratado" />
            <FormControlLabel value="comissionado" control={<Radio />} label="Comissionado" />
          </RadioGroup>
        </Box>
      </div>
      <Button sx={{position: "relative", textAlign: "", m:'10px'}} variant="contained" color="success">Cadastrar</Button>
      <Button sx={{position: "relative", textAlign: "end", m:'10px'}} variant="contained" color="error">Cancelar</Button>
    </div>
  )
}