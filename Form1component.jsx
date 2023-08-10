import React, { useState } from "react";
import "./Table1component";
import "./Form1component.css";
import moment from "moment/moment";

const Form1component = ({
	setTableData,
	tabledata,
	email,
	setEmail,
	password,
	setPassword,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	id,
	setId,
	setShowForm,
}) => {
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

	const handleFirstnameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastnameChange = (e) => {
		setLastName(e.target.value);
	};
	const getCurrentDate = () => {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${"-"}${month < 10 ? `0${month}` : `${month}`}${"-"}${date}`;
	};
	const handleClick = (e) => {
		e.preventDefault();
		const temp = {
			id: id,
			firstname: firstName,
			lastname: lastName,
			email: email,
			password: password,
			createdAt: getCurrentDate(),
			createdTime: moment().format("LT"),
		};
		const index = tabledata.findIndex((item) => item.id === temp?.id);
		if (index !== -1) {
			setTableData((prev) => {
				const replaceData = [...prev];
				replaceData[index] = temp;
				return replaceData;
			});
			setEmail("");
			setFirstName("");
			setLastName("");
			setPassword("");
			setShowForm(false);
		} else {
			setId(id + 1);
			setTableData([...tabledata, temp]);
			setEmail("");
			setFirstName("");
			setLastName("");
			setPassword("");
			setShowForm(false);
		}
	};

	return (
		<div className="row">
			<div className="col-lg-10 mt-3 mx-3 formdesign  center-form">
				<form onSubmit={handleClick}>
					<h2>Sample Form Reactjs</h2>
					<div className="form-group">
						<label for="email">Email address: </label>
						<input
							type="email"
							value={email}
							error={isValidEmail}
							onChange={handleEmailChange}
							className="form-control"
							placeholder="Enter email"
							id="email"
							helperText="Enter the  strong Email."
						/>
					</div>
					<br />
					<br />
					<div className="form-group ">
						<label for="pwd">Password: </label>&nbsp;&nbsp;&nbsp;
						<input
							type="password"
							value={password}
							error={isValidPassword}
							onChange={handlePasswordChange}
							className="form-control"
							placeholder="Enter password"
							id="pwd"
							helperText="Enter the strong password."
						/>
					</div>
					<br />
					<br />
					<div className="form-group">
						<label for=" FirstName">First Name: </label>
						<input
							type="firstname"
							value={firstName}
							onChange={handleFirstnameChange}
							className="form-control"
							placeholder="Enter  Firstname"
							id="firstname"
						/>
					</div>
					<br />
					<br />
					<div className="form-group">
						<label for="LastName">Last Name : </label>
						<input
							type="lastname"
							value={lastName}
							onChange={handleLastnameChange}
							className="form-control"
							placeholder="Enter Lastname"
							id="lastname"
						/>
					</div>
					<br />
					<br />
					<div className="centerbutton">
						<button className="btn btn-primary" type="submit" onClick={handleClick}>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Form1component;
