// import * as React from 'react';
// import "./App.css"
// import FormPropsTextFields from './Sampleform';
// import FormProps from './Sampleform';
// // import Sample from './Components/Sample';

// export default function App() {
//   return (
//   <>
//   {/* <FormPropsTextFields/> */}
//   <FormProps/>
//   </>
//   );
// }
// //////////////////////////////////////////////////////////
import React, { useState } from "react";
import { AppBar, Box, Container } from "@mui/material";
import FormComponent from "./Formcomponent";
import TableComponent from "./Tablecomponent";
import Button from '@mui/material/Button';

export default function App() {
  const [dataStorage, setDataStorage] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const handleContinue = (formData) => {
    setDataStorage([...dataStorage, { ...formData, serialno: dataStorage.length + 1 }]);
    setShowForm(false);
  };
console.log(dataStorage);
  return (
    <>
      <Box>
        <Box sx={{ backgroundColor: "#E4E7ED", paddingTop: 3, paddingBottom: 1, overflow: "auto" }}>
          
          <Container>
            {showForm ? <FormComponent onContinue={handleContinue} /> : <TableComponent dataStorage={dataStorage} />}
          </Container>
        </Box>
      </Box>
    </>
  );
}
