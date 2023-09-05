import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Table from "react-bootstrap/Table";
import { green } from "@mui/material/colors";
import axios from "../axiosinter";
import { BiShow } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
// import { CSmartPagination } from '@coreui/react-pro'
import Stack from "@mui/material/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import AddUsers from "./AddUsers";
import ViewSingleUser from "./ViewSingleUser";
import ImageLogo from "../assets/images/logo1.png";
import SideBar from "./SideBar";
import Modal from "../components/Modal";
import CommonModal from "../components/Modal";
import "./table.css";
import "./sidebar.css";
import ReactPaginate from "react-paginate";

// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const TablePage = () => {
	const navigate = useNavigate();
	// const { id } = useParams();
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);

	const [formData, setFormData] = useState({
		name: " ",
		phone_number: " ",
		email: " ",
		message: " ",
	});
	const [addModalVisible, setAddModalVisible] = useState(false);
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [deleteModalVisible, setDeleteModalVisible] = useState(false);
	const [selectedDeleteUser, setSelectedDeleteUser] = useState(null);
	const [showModalVisible, setShowModalVisible] = useState(false);
	const [selectedShowUser, setSelectedShowUser] = useState(null);
	const [id, setId] = useState(null);
	const [search,setSearch]= useState("");


	//Pagination in MUI
	const [currentPage, setCurrentPage] = useState(0);

	// const handleDeleteClick = (id) => {
	// 	console.log("Delete clicked for id", id);



	const handleSearchChange = (e) =>{
		
			// setSearch({ ...formData, [e.target.name]: e.target.value });
			setSearch(e.target.value );

		
	}

	const handleDeleteUser = () => {
		if (selectedDeleteUser) {
			const userId = selectedDeleteUser.id;
        console.log(userId);
			axios
				.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${userId}`)
				.then((res) => {
					const updatedData = data.filter((user) => user.id !== id);
					setData(updatedData);
					toast.success("User details deleted successfully");
                    axios.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=${currentPage}&size=5`)

					closeDeleteModal();
				})
				.catch((err) => {
					console.log("Error occurred while deleting:", err);
					toast.error("Error deleting user");
				});
		}
	};






	const openAddModal = () => {setAddModalVisible(true);setId(null)}
	const closeAddModal = () => setAddModalVisible(false);

	const openEditModal = (user) => {
		setSelectedUser(user);
		setEditModalVisible(true);
		
	};
	console.log(selectedUser);
	const closeEditModal = () => {
		setSelectedUser(null);
		setEditModalVisible(false);
	};
	const openDeleteModal = (user) => {
		setSelectedDeleteUser(user);
		setDeleteModalVisible(true);
	};
	const closeDeleteModal = () => {
		setSelectedDeleteUser(null);
		setDeleteModalVisible(false);
	};

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}
	const handleAddUser = (e) => {
		e.preventDefault();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(formData.email)) {
			toast.error("Invalid email format");
			return;
		}

		if (id) {
			axios
				.put(`https://fts-backend.onrender.com/admin/testing/editUserById?id=${id}`, formData)
				.then((res) => {
					toast.success(res.data.response.message);
					setTimeout(() => navigate("/table"), 1000);
				})

				.catch((err) => {
					console.log("Error has occurred", err);
					toast.error(" Error has Occured");
				});
		} else {
			axios
				.post("https://fts-backend.onrender.com/user/newRegistration", formData)
				.then((res) => {
					toast.success("Thanks for registering");
					setAddModalVisible(false);
					setFormData({
						name: "",
						phone_number: "",
						email: "",
						message: "",
					});

					navigate("/table");
				})
				.catch((err) => console.log("Error has occurred", err));
			//  toast.error('Error adding user');
		}
	};
	const openShowModel = (user) => {
		setSelectedShowUser(user);
		setShowModalVisible(true);
	};
	console.log(selectedShowUser,"showuser");
	const closeShowModal = () => {
		setSelectedShowUser(null);
		setShowModalVisible(false);
	};

	useEffect(() => {
		axios
			.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=${currentPage}&size=5&search=${search}`)
			.then((response) => {
				setData(response.data?.response?.paginationOutput.results);
				setTotalPages(response.data?.response?.paginationOutput.totalPages);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [currentPage,search]);
	return (
		<>
			<ToastContainer />
			<Container fluid>
				<Row>
					<Col xs lg="2" className="p-0 vh-100">
						<SideBar />
					</Col>

					<Col xs lg="10">
						{/* <div class="overflow-auto"> */}
						<Card style={{ marginTop: "10px", padding: "0px" }}>
							<Card.Header className="text-center" style={{ fontWeight: "bold" }}>
								Users List
							</Card.Header>
							<Card.Body>
								<Row>
									<Col xs lg="3">
										<Form className="d-flex">
											<Form.Control type="search"  onChange={handleSearchChange} placeholder="Search" className="me-2" aria-label="Search" />
											<Button 
											variant="outline-success" 
											 name="search"
								             value={search}
								            >Search</Button>
										</Form>
									</Col>
									<Col>
										<div className="d-flex justify-content-end mb-1">
											<Button
												variant="primary"
												// onClick={() => navigate("/addusers")}
												onClick={openAddModal}
												style={{ marginBottom: 1 }}
											>
												Add User
											</Button>
										</div>
									</Col>
								</Row>
								<Table striped bordered hover responsive style={{ fontSize: "13px" }}>
									<thead>
										<tr>
											<th>S.NO</th>
											<th>Name</th>
											<th>Email</th>
											<th>Phone_Number</th>
											<th>Message</th>
											<th>Created_By</th>
											<th>Updated_By</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{data.map((data1, index) => (
											<tr key={index}>
												{/* <td>{currentPage === 1 ? index + 1 :currentPage === 2 ? index + 1 * 5 + 1 : index + 2 * 5 + 1}</td> */}
												<td>{index + 1 + currentPage * 5}</td>
												<td> {data1?.name}</td>
												<td>{data1?.email}</td>
												<td>{data1?.phone_number}</td>
												<td>{data1?.message}</td>
												<td>{data1?.createdAt}</td>
												<td>{data1?.updatedAt}</td>
												<td>
													<div className="d-flex gap-1 ">
														<AiTwotoneEdit
															onClick={() => {
																// navigate(`/EditUser/${data1?.id}`);
																openEditModal(data1);
																setId(data1?.id);
															}}
															className="edit-icon"
														/>
														<AiTwotoneDelete
															onClick={() => {
																// handleDeleteClick(data1?.id)
																openDeleteModal(data1);
																console.log(data1?.id);
															}}
															className="delete-icon"
														/>
														<BiShow
															onClick={() => {
																// handleShowClick(data1?.id)
																openShowModel(data1);
																console.log(data1?.id);
															}}
															className="show-icon"
														/>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
<Row>
	<Col>
								<ReactPaginate
									previousLabel={"← Previous"}
									nextLabel={"Next →"}
									pageCount={totalPages}
									onPageChange={handlePageClick}
									// containerClassName={"pagination"}
									// previousLinkClassName={"pagination__link"}
									// nextLinkClassName={"pagination__link"}
									disabledClassName={"pagination__link--disabled"}
									// activeClassName={"pagination__link--active"}
										  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
									
								/> </Col>
<Col  className="bread" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
<Breadcrumb>
      <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        User List  
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>User Table</Breadcrumb.Item> */}
    </Breadcrumb> </Col>
	</Row>
							
								{/* </div> */}
							</Card.Body>
						</Card>
						{/* </div> */}
					</Col>
				</Row>
			</Container>
			<CommonModal
				show={addModalVisible}
				hide={closeAddModal}
				title={"Add User"}
				btn1Value={"Cancel"}
				btn2Value={"Add"}
				body={<AddUsers formData={formData} setFormData={setFormData}  />}
				// <AddUsers formData={formData} setFormData={setFormData} />
				btn1Click={closeAddModal}
				btn2Click={handleAddUser}
			/>
			<CommonModal
				show={editModalVisible}
				hide={closeEditModal}
				title={"Edit User"}
				btn1Value={"Cancel"}
				btn2Value={"Update"}
				btn1Click={closeEditModal}
                btn2Click={handleAddUser}
				body={<AddUsers formData={formData} setFormData={setFormData} editData={selectedUser}/>}
			/>
			<CommonModal
				show={deleteModalVisible}
				hide={closeDeleteModal}
				title={"Delete User"}
				btn1Value={"Yes"}
				btn2Value={"No"}
				btn1Click={handleDeleteUser}
				btn2Click={closeDeleteModal}
				body={"Are you sure you want to delete"}
			/>
			<CommonModal show={showModalVisible} hide={closeShowModal} title={"View User"} body={<ViewSingleUser id={selectedShowUser?.id} />} />

			



			</>
	);
};

export default TablePage;
