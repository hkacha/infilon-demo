import { useContext } from "react";
import { Button } from "react-bootstrap";

import UserContext from "../context/UserContext";

const Item = ({ item }) => {
	const { handleDelete, selectedRow } = useContext(UserContext);

	return (
		<tr>
			<td>{item.first_name}</td>
			<td>{item.last_name}</td>
			<td>{item.email}</td>
			<td>
				<img src={item.avatar} alt={item.email} width="30" height="30" />
			</td>
			<td>
				<Button size="sm" onClick={(e) => selectedRow(e, item)}>
					Edit
				</Button>{" "}
				&nbsp;
				<Button size="sm" onClick={() => handleDelete(item.id)}>
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default Item;
