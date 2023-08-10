import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form1component from "./Component/Form1component";
import Table1component from "./Component/Table1component";

export default function App() {
	const [id, setId] = useState(1);
	const [tabledata, setTableData] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [editData, setEditData] = useState();
	const [showForm, setShowForm] = useState(true);

	return (
		<>
			{showForm ? (
				<Form1component
					tabledata={tabledata}
					setTableData={setTableData}
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					firstName={firstName}
					setFirstName={setFirstName}
					lastName={lastName}
					setLastName={setLastName}
					id={id}
					setId={setId}
					editData={editData}
					setShowForm={setShowForm}
				/>
			) : (
				<Table1component
					tabledata={tabledata}
					setTableData={setTableData}
					setFirstName={setFirstName}
					setLastName={setLastName}
					setEmail={setEmail}
					setPassword={setPassword}
					setId={setId}
					setEditData={setEditData}
					setShowForm={setShowForm}
				/>
			)}
		</>
	);
}
