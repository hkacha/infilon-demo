import { useContext } from "react";
import { Button } from "react-bootstrap";

import UserContext from "../context/UserContext";

const EditableRow = () => {
	const { selectedItem, handleDataEdit, handleCancel } =
		useContext(UserContext);

	return (
		<tr>
			<td>
				<input
					type="text"
					className="form-control"
					name="first_name"
					value={selectedItem.first_name}
					onChange={handleDataEdit}
				/>
			</td>
			<td>
				<input
					type="text"
					className="form-control"
					name="last_name"
					value={selectedItem.last_name}
					onChange={handleDataEdit}
				/>
			</td>
			<td>
				<input
					type="text"
					className="form-control"
					name="email"
					value={selectedItem.email}
					onChange={handleDataEdit}
				/>
			</td>
			<td>
				<img
					src={selectedItem.avatar}
					alt={selectedItem.email}
					width="30"
					height="30"
				/>
			</td>
			<td>
				<Button size="sm" type="submit">
					Save
				</Button>{" "}
				&nbsp;
				<Button size="sm" onClick={handleCancel}>
					Cancel
				</Button>
			</td>
		</tr>
	);
};

export default EditableRow;
