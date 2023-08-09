import React, { useState } from "react";
import { Typography, OutlinedInput, Grid, Button, Link ,Container,Box,AppBar,InputAdornment} from "@mui/material";
import moment from "moment";
import  TableComponent from "./Tablecomponent";



const FormComponent = ({ onContinue }) => {
  const[first,setFirst]=useState(false);
  const[last,setLast]=useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(!emailRegex.test(email.trim()));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(!passwordRegex.test(password.trim()));
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleClick = () => {
    setFirst(false);
    setLast(true);

    const addData = {
      email: email,
      password: password,
      firstname: firstName,
      lastName: lastName,
      createddate: moment().format("MM/DD/YYYY"),
      createdtime: moment().format("MM/DD/YYYY"),
    };
    onContinue(addData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  const handleShow = () => {
    setFirst(true);
    setLast(false);

    // const addData = {
    //   email: email,
    //   password: password,
    //   firstname: firstName,
    //   lastName: lastName,
    //   createddate: moment().format("MM/DD/YYYY"),
    //   createdtime: moment().format("MM/DD/YYYY"),
    // };
    // onContinue(addData);
    // setEmail("");
    // setPassword("");
    // setFirstName("");
    // setLastName("");
  };

  return (
    
    <Grid container spacing={2} alignItems="center">
  <Box >
      {/* <AppBar position='static' sx={{ backgroundColor: '#3C3C3B', padding:4 }}></AppBar> */}
      
      {first &&(
      <Box sx={{ backgroundColor: '#E4E7ED', paddingTop: 3, paddingBottom:1, overflow: 'auto' }} >
        <Container >
          <Grid container rowGap={2} columnGap={2} >
            <Grid item xs={12} lg={10} sm={6} maxHeight="lg" sx={{ backgroundColor: '#E4E7ED' }}>
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
      )}
    </Box> 
    {last &&(   
    <Button
        onClick={handleShow}
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#EC6611",
          textTransform: "none",
          "&:hover": {
            background: "#EC6611",
            textTransform: "none",
          },
          height: 45,
          width: 196,
        }}
      >
        <Typography>Continue</Typography>
      </Button>
    )}
    </Grid>
  );
};

export default FormComponent;
