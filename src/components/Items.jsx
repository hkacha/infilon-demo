import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";

import UserContext from "../context/UserContext";
import Item from "./Item";
import EditableRow from "./EditableRow";

const Items = () => {
	const { data, getData, editId, handleSubmit } = useContext(UserContext);

	useEffect(() => {
		getData();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Email</th>
						<th>Avatar</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((item, index) => (
							<React.Fragment key={index}>
								{editId === item.id ? (
									<EditableRow />
								) : (
									<Item key={index} item={item} />
								)}
							</React.Fragment>
						))}
				</tbody>
			</Table>
		</form>
	);
};

export default Items;
