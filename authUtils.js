export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken'); // Change this according to your actual storage
    return token !== null;
  };




// export const logout = () => {
//     localStorage.removeItem('authToken'); 
//   };