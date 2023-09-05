import React, { useState, useEffect } from "react";
import "./viewuserstable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import AddUsers from "./AddUsers";
import ViewSingleUser from "./ViewSingleUser";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { grey, yellow } from "@mui/material/colors";
import { Container } from "react-bootstrap";

const ViewUsersTable = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	//Pagination in MUI
	const [page, setPage] = React.useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		axios
			.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=${page}&size=10`)
			.then((response) => {
				setData(response.data?.response?.paginationOutput.results);
				setTotalPages(response.data?.response?.paginationOutput.totalPages);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [page]);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	

	const handleShow = () => {
		navigate("/AddUsers");
	};

		const EditUser = () => 
		{
		const { id } = useParams();
	   };

		const handleShowClick = (id) => 
		{
		navigate(`/ViewSingleUser/${id}`);
	   };

	const handleDeleteClick = (id) => {
		console.log("Delete clicked for id", id);

		axios
			.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`)
			.then((res) => {
				const updatedData = data.filter((user) => user.id !== id);
				setData(updatedData);
				toast.success("User details deleted successfully");
			})
			.catch((err) => {
				console.log("Error occurred while deleting:", err);
				toast.error("Error deleting user");
			});
	};

	return (
		<>
			<ToastContainer />
			<div className="table-container tabledesign">
				<div>
					<h2 className="heading">Users List</h2>

					<button className="addbutton" onClick={() => navigate("/addusers")} style={{ marginLeft: 30 }}>
						Add New User
					</button>
				</div>
				<br />
				<br />
				<div class=" tabledesign">
					<Table striped="columns">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone_Number</th>
								<th>Message</th>
								<th>Created_At</th>
								<th>Updated_At</th>
								<th>Action </th>
							</tr>
						</thead>
						<tbody>
							{data.map((data1, index) => (
								<tr key={index}>
									<td>{page === 1 ? index + 1 : page === 2 ? index + 1 * 10 + 1 : index + 2 * 10 + 1}</td>
									<td> {data1?.name}</td>
									<td>{data1?.email}</td>
									<td>{data1?.phone_number}</td>
									<td>{data1?.message}</td>
									<td>{data1?.createdAt}</td>
									<td>{data1?.updatedAt}</td>
									<td>
										<div>
											<button>
												<AiTwotoneEdit
													onClick={() => {
														navigate(`/EditUser/${data1?.id}`);
														console.log(data1?.id);
													}}
												/>
											</button>
											&nbsp;&nbsp;
											<button>
												<AiTwotoneDelete onClick={() => handleDeleteClick(data1?.id)} />
											</button>
											&nbsp;&nbsp;
											<button>
												<BiShow onClick={() => handleShowClick(data1?.id)} />{" "}
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>

			<Stack spacing={1}>
				<Pagination sx={{ right: 100, backgroundColor:grey,color:"white" }} count={totalPages} page={page} onChange={handlePageChange} />
				<Typography sx={{ position: "absolute", right: 30}}>Page: {page}</Typography>
			</Stack>
		</>
	);
};

export default ViewUsersTable;





// Manual exection of pagination 
//   const itemsPerPage = 7;
//    const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (event) => {
// 	const newOffset = (event.selected * itemsPerPage) % data?.totalPages;
// 	setCurrentPage(newOffset+1);
//   };

// const handleEditClick = (id) => {
	// 	console.log("Edit clicked for index", id);
	// 	navigate(`/EditUser/${id}`)

	// };

	// useEffect(()=>{
	// 	axios.get('https://fts-backend.onrender.com/admin/testing/getallusers?offset=1&limit=10')
	// 	.then((response) =>{
	// 		setData(response.data?.response?.paginationOutput.items);
	// 		console.log(response?.data?.response?.paginationOutput?.items);
	// })
	// .catch((error) => {
	// 	console.error(" Error has occured:", error);
	//   });
	// }, []);