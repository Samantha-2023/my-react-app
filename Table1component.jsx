import React from "react";
import "./table1component.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Table1component = (props) => {
	const handleEditClick = (i) => {
		props.setEditData(props.tabledata[i]);
		props.setFirstName(props.tabledata[i].firstname);
		props.setLastName(props.tabledata[i].lastname);
		props.setEmail(props.tabledata[i].email);
		props.setPassword(props.tabledata[i].password);
		props.setId(props.tabledata[i].id);
		props.setShowForm(true);
	};

	const handleDeleteClick = (id) => {
		props.setTableData(props.tabledata.filter((item) => item.id !== id));
	};
	const handleShow = () => {
		props.setShowForm(true);
	};

	return (
		<div>
			<button className="button button1" onClick={handleShow}>
				Add
			</button>

			<table>
				<tr>
					<th>Serial No.</th>
					<th>Email</th>
					<th>Password</th>
					<th>FirstName</th>
					<th>LastName</th>
					<th> Created Date</th>
					<th> Created Time</th>
					<th> Action</th>
				</tr>
				<tbody>
					{props.tabledata.map((data, index) => {
						return (
							<tr>
								<td>{index + 1} </td>
								<td>{data.email} </td>
								<td>{data.password} </td>
								<td>{data.firstname}</td>
								<td>{data.lastname}</td>
								<td>{data.createdAt} </td>
								<td>{data.createdTime} </td>
								<td>
									<FiEdit onClick={() => handleEditClick(index)} /> <AiOutlineDelete onClick={() => handleDeleteClick(data.id)} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table1component;
