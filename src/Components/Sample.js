function Sample() {
    function handleSubmit() {
      // e.preventDefault();    
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
    

    <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Plan</TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Data.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {row.plan}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </TableContainer>
  }
  export default Sample;