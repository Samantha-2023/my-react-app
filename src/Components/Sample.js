import "./App.css";
import * as React from 'react';
import { useState } from "react";
import { AppBar, InputAdornment, OutlinedInput, Box, Container, Typography, Grid, Button, Link } from '@mui/material';
import {Table,TableBody,TableCell,TableContainer,TableHead, TableRow} from '@mui/material';
import moment from 'moment'

export default function FormProps() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataStorage,setDataStorage]= useState([]);
  const[isValidEmail, setIsValidEmail]= useState(false);
  const[isValidPassword, setIsValidPassword]= useState(false);
  const [serialNumber, setSerialNumber] = useState(1);


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  

  //     time: moment().format("h:mm A"),
  //     date: moment().format("MM/DD/YYYY")
  // // const isFormValid = () => {
  //   const isValidEmail = emailRegex.test(email.trim());
  //   const isValidPassword = passwordRegex.test(password.trim());

  //   if (!isValidEmail) {
  //     alert('Invalid email address');
  //     return false;
  //   }

  //   if (!isValidPassword) {
  //     alert('Invalid password. Password must contain at least 8 characters, including uppercase, lowercase, and a number.');
  //     return false;
  //   }

  //   return true;
  // };

// // /
// const handleSubmit = (e) => {
//   e.preventDefault();


//   if (isFormValid()) {
//     const dateTime = new Date().toLocaleString();
//     setFormSubmissions((prevSubmissions) => [
//       ...prevSubmissions,
//       {
//         email: email.trim(),
//         firstName: firstName.trim(),
//         lastName: lastName.trim(),
//         createdDateTime: dateTime,
//       },
//     ]);
//     console.log("Form submitted successfully!");
//     // setFormSubmitted(true);
//   } else {
//     console.log("Please fill in all the required fields.");
//   }
// };

// const [formSubmissions, setFormSubmissions] = useState([]);

 const Data = [];
const  handleEmailChange = (e) => {
    setEmail( e.target.value)
    setIsValidEmail(!emailRegex.test(email.trim()));
        // const isValidEmail = emailRegex.test(email.trim());
}
 
const  handlePasswordChange = (e) => {
  setPassword(e.target.value)
  setIsValidPassword(!passwordRegex.test(password.trim()));

}
const  handleFirstNameChange = (e) => {
  setFirstName(e.target.value)
}
const  handleLastNameChange = (e) => {
  setLastName(e.target.value)
}

const handleClick = (e) => {
  const addData = { 
    serialno: serialNumber,
    email:email,
   password:password , 
   firstname: firstName,
    lastName:lastName ,
    createddate:moment().format("MM/DD/YYYY"),
    createdtime:moment().format("MM/DD/YYYY")
    }; 
    // console.log(addData);
      setDataStorage([...dataStorage,addData]);
      setEmail('');
      setSerialNumber(serialNumber + 1);

  }
  return (
    <>
    <Box >
      <AppBar position='static' sx={{ backgroundColor: '#3C3C3B', padding:4 }}></AppBar>
      

      <Box sx={{ backgroundColor: '#E4E7ED', paddingTop: 3, paddingBottom:1, overflow: 'auto' }} >
        <Container >
          <Grid container rowGap={2} columnGap={2} >
            <Grid item xs={12} lg={7} sm={6} maxHeight="lg" sx={{ backgroundColor: '#E4E7ED' }}>
              <Grid container sx={{ borderRadius: '16px', backgroundColor: '#ffffff', padding: 2 }}>

                <Grid item xs={12} mb={1} >
                  <Typography sx={{ marginLeft: 0.3, fontWeight: 'medium', fontSize: 17 }} >
                    <Link href="#" underline="none" sx={{color:'#85C1D7'}}>
                      1
                    </Link>
                    &nbsp;&nbsp;Account Details
                  </Typography>
                </Grid>


                <Grid item xs={12} mb={1} sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 11 }} >
                    Already have an account?
                    <Link href="#" underline="none" sx={{color:'#85C1D7'}}>
                      {' sign in here'}
                    </Link>
                  </Typography>
                </Grid>
                <Grid container spacing={2} alignItems="center" >
                  <Grid item sm={6} xs={12}  >
                    <Typography >Email Address*</Typography>
                    <OutlinedInput  error={isValidEmail}
                    id="outlined-error-helper-text"
                     onChange={handleEmailChange}  name="Email"  placeholder='Email Address'  sx={{ outline: 'none', width: '100%', border:'none',borderColor:'white', borderRadius: 4, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography>Password*</Typography>
                    <OutlinedInput error={isValidPassword}
          id="outlined-error-helper-text"
          helperText="Enter the strong password."
                    
                    onChange={handlePasswordChange}  name="password"  placeholder='Password' sx={{outline: 'none', width: '100%',border:'none',borderColor:'white', borderRadius: 4, backgroundColor: '#E4E7ED' }}
                      endAdornment={<InputAdornment position="end" sx={{ color:'#3C3C3B', textDecoration: 'underline', }}>show</InputAdornment>}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>First Name*</Typography>
                    <OutlinedInput  error
          id="outlined-error-helper-text"
          helperText="Enter  only the  characters as Firstname"
                    onChange={handleFirstNameChange}  name="firstname" placeholder='First Name' sx={{outline: 'none', width: '100%',border:'none',borderColor:'white', borderRadius: 4, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item sm={6} xs={12} >
                    <Typography>Last Name*</Typography>
                    <OutlinedInput  error
          id="outlined-error-helper-text"
          helperText="Enter the strong password ."
                    
                    onChange={handleLastNameChange}  name="Lastname" placeholder='Last Name' sx={{outline: 'none', width: '100%',border:'none',borderColor:'white', borderRadius: 4, backgroundColor: '#E4E7ED' }} />
                  </Grid>
                  <Grid item xs={12} sm={9}  >
                    <Typography sx={{ fontSize: 11 }}>
                      By creating an account, you agree to the
                      <Link href="#" underline="none" sx={{color:'#85C1D7'}}>
                        Terms And Conditions&nbsp;
                      </Link>
                      set out by this site,including our
                      <Link href="#" underline="none" sx={{color:'#85C1D7'}}>
                        Cookie Use
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button  onClick={handleClick} variant='contained' disableElevation
                        sx={{
                          backgroundColor: '#EC6611',
                          textTransform: 'none', '&:hover': {
                            background: '#EC6611',
                            textTransform: 'none'
                          }, height: 45, width: 196
                        }} ><Typography>Continue</Typography></Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
            
          </Grid>
        </Container>
        {/* <AppBar position='static' sx={{ backgroundColor: '#3C3C3B', padding:2, marginTop:2 }}></AppBar> */}
      </Box>
    </Box>
         <TableContainer>
                    <Table>
                      <TableHead>
                      <TableRow>
            <TableCell align="right">SerialNo</TableCell>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">CreatedDate</TableCell>
            <TableCell align="right">CreatedTime</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {dataStorage.map((data) => (  
             <TableRow>
             <TableCell align="center">{data.serialno}</TableCell>              

              <TableCell align="center">{data.firstname}</TableCell>              
             <TableCell align="center">{data.lastName}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.password}</TableCell>
              <TableCell align="center">{data.createddate}</TableCell>
              <TableCell align="center">{data.createdtime}</TableCell>
            </TableRow>
            ))}
        </TableBody>
  
                       
                        </Table>
                    </TableContainer>
                    </>

  );
                      }