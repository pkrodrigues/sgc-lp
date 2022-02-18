import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';

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
        '& .MuiTextField-root': { m: 3, width: '38ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField id="name" label="Nome:" variant="standard" />
        <TextField id="surname" label="Sobrenome:" variant="standard" />
        <TextField id="rg" label="RG:" variant="standard" />
        <TextField id="cpf" label="CPF:" variant="standard" />
        <TextField id="dtNasc" label calendar variant="standard" type="date" helperText="Por favor informe sua Data de nascimento"/>
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
        '& .MuiTextField-root': { m: 3, width: '36ch' },
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
        <TextField sx={{m:2, width:'36ch'}} id="rua" label="Rua:" variant="standard"/>
        <TextField sx={{mt:2, ml:3.5,  width:'17.3ch'}} id="numResid" label="Número:" variant="standard"/>
        <TextField sx={{m:2, width:'17.3ch'}} id="complemento" label="Complemento:" variant="standard" />
      </Box>
    </div>
    <div>
      <Box component="form" sx={{'& .MuiTextField-root': {m:3, width:'36ch'}}}>
        <h2>Dados de Contato:</h2>
        <TextField type="email" id="email" name="email" label="Email" variant="standard"/>
        <TextField type="tel" id="phone1" name="phone1" label="Telefone 1:" variant="standard"/>
        <TextField className="inputPhone" type="tel" id="phone2" name="phone2" label="Telefone 2:" variant="standard"/>
        <TextField sx={{visibility: 'hidden'}}/>
      </Box>
      
    </div>
   
  </div>
  )
} 