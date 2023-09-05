import React, { useState, useEffect } from "react";
import "./addusers.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ViewUsersTable from "./ViewUsersTable";
import { useNavigate, useParams } from "react-router-dom";
import ViewSingleUser from "./ViewSingleUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'
import { brown } from "@mui/material/colors";


const AddUsers = ({formData ,setFormData,editData}) => {
	const { id } = useParams();
	const navigate = useNavigate();



	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// onCancel();

useEffect(()=>{
if(editData!=null && editData!=undefined){
	setFormData({name:editData.name, email:editData.email,phone_number:editData.phone_number, message:editData.message})
}
else{
	setFormData({name:"" ,email:"", phone_number:"", message:""})
}
},[editData])
	console.log(editData,"edit");

	
	useEffect(() => {
		if (id) {
			axios
				.get(`https://fts-backend.onrender.com/admin/testing/getUserById?id=${id}`)
				.then((response) => {
					const userData = response.data;
					setFormData({
						name: userData.response.user.name,
						phone_number: userData.response.user.phone_number,
						email: userData.response.user.email,
						message: userData.response.user.message,
					});
				})
				.catch((error) => {
					console.error("Error has Occured :", error);
				});
		}
	}, [id, setFormData]);

	

	const handleCancel = () => {
		Swal.fire({
			title: 'Are you sure to cancel?',
			showDenyButton: true,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success');
				navigate("/");
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info');
			}
		});
	};






	

	return (
		<>
			<ToastContainer />
			{/* <div className="row justify-content-center   bodybackground vh-100">
				<div className="col-md-7  mx-auto">
					<div className=" card  border border-secondary  p-3  bd-example gap-3  border-5  rounded-2  mt-5"> */}
						<div className="form-floating">
							<textarea
								className="form-control"
								placeholder="Enter the name "
								id="floatingTextarea"
								name="name"
								value={formData.name}
								onChange={handleChange}
							></textarea>

							<label htmlFor="floatingTextarea">Name</label>
						</div>

						<div className="form-floating">
							<textarea
								className="form-control"
								placeholder="10 digits phone number"
								id="floatingTextarea"
								name="phone_number"
								value={formData.phone_number}
								onChange={handleChange}
							></textarea>
							<label htmlFor="floatingTextarea">Phone Number</label>
						</div>

						<div className="form-floating mb-3">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
							<label htmlFor="floatingInput">Email address</label>
						</div>

						<div className="form-floating">
							<textarea
								className="form-control"
								placeholder="Leave a comment here"
								id="floatingTextarea"
								name="message"
								value={formData.message}
								onChange={handleChange}
							></textarea>
							<label htmlFor="floatingTextarea">Message</label>
						</div>

						{/* <div className="d-grid gap-2 col-3 mx-auto"   >
							<Button   className="btn1"    onClick={handleSubmit} >
								{id ? "Update" : "Submit"}
							</Button>
							<Button className="btn1"   onClick={handleCancel}>
								Cancel
							</Button>
						</div> */}
					{/* </div>
				</div>
			</div> */}
		</>
	);
};
export default AddUsers;

//     const nameRegex = /^[A-Za-z]+$/;
//     if (!nameRegex.test(formData.name)) {
//   toast.error('Invalid name format');
//   return;
//   }

//   const phoneNumberRegex = /^\d{10}$/;
//   if (!phoneNumberRegex.test(formData.phone_number)) {
// 	toast.error('Invalid phone number format');
// 	return;
//   }



// const handleCancel = () => {
       
	// 	Swal.fire({
	// 		title: 'Are you sure to cancel?',
	// 		showDenyButton: true,
	// 		// showCancelButton: true,
	// 		confirmButtonText: 'Save',
	// 		denyButtonText: `Don't save`,
	// 	  }).then((result) => {
	// 		/* Read more about isConfirmed, isDenied below */
	// 		if (result.isConfirmed) {
	// 		  Swal.fire('Saved!', '', 'success')
	// 		  navigate("/");

	// 		} else if (result.isDenied) {
	// 		  Swal.fire('Changes are not saved', '', 'info')
	// 		}
	// 	  })

	// };