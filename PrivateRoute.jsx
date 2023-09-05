import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
// import React , { useState, useEffect }from 'react';





const PrivateRoute = ({ authenticate,children }) => {
  return authenticate ? children : <Navigate to="/" />;
};
export default PrivateRoute;








// const PrivateRoute = ({ authenticated,children }) => {
   

//   return authenticated ? children : <Navigate to="/Login" />;
// };
// export default PrivateRoute;




// const PrivateRoute=({children})=>{
//   const[authenticated,setAuthenticated]= useState(false);
//   const [loading,setLoading] = useState(false);

//   useEffect(()=>{
//     const  checkAuthentication = async ()=> {
//      const accesstoken = localStorage.getItem('authToken')
//      if(!accesstoken){
//       setLoading(true);
//       return;
//      }
  // try{
  //   const response =await axios.post('https://fts-backend.onrender.com/admin/refreshToken',
  //   {
  //     refreshToken : response.data.response.refreshtoken,
  //   }
  //   );

  //   const newAccessToken = response.data.response.acesstoken;
  //   localStorage.setItem('authToken', newAccessToken);
  //   setAuthenticated(true);
  // }
  //   catch(error){
  //     localStorage.removeItem('authToken');
  //   }
  //   finally{
  //     setLoading(false);
  //   }
    // };
    // checkAuthentication();

//   },[]);

// if(loading){
//   return <div>Loading...</div>;
// }

// return authenticated? children:<Navigate to ="/"    />;

// };

// export default PrivateRoute;