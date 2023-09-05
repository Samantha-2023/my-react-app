import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./navbarcomp.css";
import { AiTwotoneMail } from "react-icons/ai";
import {BsFillBellFill} from  "react-icons/bs";
import {AiOutlineLogout} from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import Avatar from '@mui/material/Avatar';
import {deepPurple } from '@mui/material/colors';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// import Badge from '@mui/material/Badge';
// import Stack from '@mui/material/Stack';

const NavBarComp = () => {

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/");
	};
			// Navigate("/Login");


	return (
		<>
		{/* //bg-info 	 */}
 <Navbar className="justify-content-end  " style={{backgroundColor:"#00C9E5"}}>
 					<Container >
					 <Navbar fixed="top"  className="navbarDesign "/> 
						{/* <Navbar.Brand href="#home">Transparency&Trust</Navbar.Brand> */}
 						<Navbar.Toggle aria-controls="basic-navbar-nav" /> 					
							<Navbar.Collapse id="basic-navbar-nav">
 							<Nav className="mx-auto">
								{/* <Nav.Link href="#home">Dashboard</Nav.Link>
								<Nav.Link href="#link">About us</Nav.Link>
								<Nav.Link href="#link">Contact</Nav.Link> */}

 								{/* <NavDropdown title="Projects" id="basic-nav-dropdown">
 									<NavDropdown.Item href="#action/3.1">Courses offerd</NavDropdown.Item>
 									<NavDropdown.Item href="#action/3.2">Training Methdology </NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Cuuriculam</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Upcoming New Projects</NavDropdown.Item>
								</NavDropdown> */}
							{/* <Form className="d-flex">
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
								<Button variant="outline-success">Search</Button>
							</Form> */}
						</Nav>
						<div className="icon-container ">
							 {/* <Badge className='custom-badge' bg="danger">7</Badge>  */}
							<AiTwotoneMail className="custom-icon" />
							<span class="position-relative right-0 translate-middle badge border 
							 rounded-circle bg-danger">
								9<span class="visually-hidden">unread messages</span>
							</span>

                                < BsFillBellFill  className="custom-icon"/>
                                <span class="position-relative right-0 translate-middle badge border  rounded-circle bg-danger">
									7<span class="visually-hidden">Notifications attention</span>
								</span>
                                <Avatar  sx={{ bgcolor: "whitesmoke",color:"black"}}>S</Avatar>&nbsp;&nbsp;
                                 {/* <Avatar alt="Cindy Baker" src="assets/images/girl.PNG"
                                        sx={{ width: 27, height: 27 }} />  */}
								<AiOutlineLogout className="custom-icon " onClick={handleLogout}	/>	

							</div>
						</Navbar.Collapse>
					</Container>
 </Navbar>
				
		</>
	);
};

export default NavBarComp;


