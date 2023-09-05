import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Viewsingleuser.css";

const ViewSingleUser = ({id}) => {
	const [userData, setUserData] = useState(null);
	// const { id } = useParams();
console.log(id,"params");
	useEffect(() => {
		axios
			.get(`https://fts-backend.onrender.com/admin/testing/getUserById?id=${id}`)
			.then((response) => {
				setUserData(response.data?.response?.user);
			})
			.catch((error) => {
				console.error("Error fetching user details:", error);
			});
	}, []);

	return (
		<div class=" container-fluid designbody">
			<div class="card carddesign pt-3 mx-auto  d-flex   text-center">
				<h2>User Details</h2>
				<p> Name: {userData?.name}</p>
				<p>Email: {userData?.email}</p>
				<p>Phone Number: {userData?.phone_number}</p>
				<p>Message: {userData?.message}</p>
			</div>
		</div>
	);
};

export default ViewSingleUser;
