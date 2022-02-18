// import React, {useState} from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import './FormMed.css';

// const sexos = [
//   {
//     value: 'M',
//     label: 'Masculino'
//   },
//   {
//     value: 'F',
//     label: 'Feminino'
//   },
//   {
//     value: 'NB',
//     label: 'Não binário'
//   }
// ];

// // const [sex, setSexo]  = React.useState('');
// // const handleChange = (event: SelectChangeEvent) => {
// //       setSexo(event.target.value  as string);
// // };

// export default props => 
//   <div>
//     <div className="boxMed">
//       <h2>Dados Pessoais</h2>
//       <Box component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 3, width: '43ch' },
//       }}
//       noValidate
//       autoComplete="off">
//         <TextField id="name" label="Nome:" variant="standard" />
//         <TextField id="surname" label="Sobrenome:" variant="standard" />
//         <TextField id="rg" label="RG:" variant="standard" />
//         <TextField id="cpf" label="CPF:" variant="standard" />
        
//         {/* <TextField 
//           id="sexo" 
//           select 
//           label="Sexo"
//           value={sex}
//           onChange={handleChange}
//           helperText="Por favor informe seu gênero"
//           variant="standard" 
//         >
//           {
//             sexos.map((option)=>(
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             )) 

            
//           }
//         </TextField> */}
        
//       </Box>
      
//     </div>
//   </div>