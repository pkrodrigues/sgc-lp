import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './FormCad.css';
import { FormControl } from "@mui/material";

const generos = [
  {
    value:'M',
    label:'Masculino'
  },
  {
    value:'F',
    label:'Feminino'
  },
  {
    value:'NB',
    label:'Não Binário'
  }
]

export default (props) => {

  const [genero, setGenero] = React.useState('')
  const handleChange = (event) =>{
    setGenero(event.target.value)
  }

  return (
  <div className="boxCad">
    <div className="">
      <h2>Dados Pessoais</h2>
      <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '46ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField id="name" label="Nome:" variant="standard" />
        <TextField id="surname" label="Sobrenome:" variant="standard" />
        <TextField id="rg" label="RG:" variant="standard" />
        <TextField id="cpf" label="CPF:" variant="standard" />
        <TextField mid="dtNasc" calendar variant="standard" type="date" helperText="Por favor informe sua Data de nascimento"/>
        <TextField
          id="sexo"
          select
          label="Sexo"
          value={genero}
          onChange={handleChange}
          helperText="Por favor informe seu sexo"
          variant="standard"
        >
          {generos.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </div>
    <div>
      <h2>Endereço</h2>
      <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '46ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField id="cep" label="CEP:" variant="standard"/>
      <TextField id="city" label="Cidade:" variant="standard"/>

      {/* <TextField id="cep" select label="Cidade:" value={city} onChange={handleChange} variant="standard">
        {CSSRuleList.map((option)=>(
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        sx={{'& .MuiTextField-root': {m:3, width:'25ch'}}}
      </TextField> */}
      </Box>
      <Box component="form" >
        <TextField sx={{m:2, width:'46ch'}} id="rua" label="Rua:" variant="standard"/>
        <TextField sx={{mt:2, ml:3.5,  width:'21.5ch'}} id="numResid" label="Nº da Residência:" variant="standard"/>
        <TextField sx={{m:2, width:'22.5ch'}} id="complemento" label="Complemento:" variant="standard" />
      </Box>
    </div>
    <div>
      <h2>Dados de Contato:</h2>
      <TextField type="email" id="email" name="email" label="Email" variant="standard"/>
      <TextField type="tel" id="phone1" name="phone1" label="Telefone 1:" variant="standard"/>
      <TextField type="tel" id="phone2" name="phone2" label="Telefone 2:" variant="standard"/>

    </div>
  </div>
  )
} 